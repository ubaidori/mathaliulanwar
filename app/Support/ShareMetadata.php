<?php

namespace App\Support;

use App\Models\GalleryAlbum;
use App\Models\Page;
use App\Models\Post;
use App\Models\SiteSetting;
use App\Models\StudentWork;
use Illuminate\Support\Str;

class ShareMetadata
{
    /**
     * @return array{title:string,description:string,url:string,type:string,image:?string}
     */
    public static function forPost(Post $post, ?SiteSetting $siteSetting = null): array
    {
        return self::build(
            title: $post->title,
            description: self::excerpt($post->excerpt, $post->content, $siteSetting),
            url: route('berita.show', $post),
            type: 'article',
            image: self::storageUrl($post->featured_image_path) ?? self::fallbackImage($siteSetting),
        );
    }

    /**
     * @return array{title:string,description:string,url:string,type:string,image:?string}
     */
    public static function forStudentWork(StudentWork $studentWork, ?SiteSetting $siteSetting = null): array
    {
        return self::build(
            title: $studentWork->title,
            description: self::excerpt($studentWork->excerpt, $studentWork->content, $siteSetting),
            url: route('karya-santri.show', $studentWork),
            type: 'article',
            image: self::storageUrl($studentWork->featured_image_path) ?? self::fallbackImage($siteSetting),
        );
    }

    /**
     * @return array{title:string,description:string,url:string,type:string,image:?string}
     */
    public static function forGalleryAlbum(GalleryAlbum $album, ?SiteSetting $siteSetting = null): array
    {
        $album->loadMissing('images');

        $coverImagePath = $album->cover_image_path ?: $album->images->first()?->image_path;

        return self::build(
            title: $album->title,
            description: self::excerpt($album->description, null, $siteSetting),
            url: route('galeri.show', $album),
            type: 'article',
            image: self::storageUrl($coverImagePath) ?? self::fallbackImage($siteSetting),
        );
    }

    /**
     * @return array{title:string,description:string,url:string,type:string,image:?string}
     */
    public static function forPage(Page $page, ?SiteSetting $siteSetting = null): array
    {
        return self::build(
            title: $page->meta_title ?: $page->title,
            description: self::excerpt($page->meta_description ?: $page->excerpt, $page->content, $siteSetting),
            url: $page->slug === 'profil'
                ? route('profil.show')
                : ($page->slug === 'pendidikan'
                    ? route('pendidikan.show')
                    : route('profil.section.show', $page)),
            type: 'article',
            image: self::storageUrl($page->featured_image_path) ?? self::fallbackImage($siteSetting),
        );
    }

    /**
     * @return array{title:string,description:string,url:string,type:string,image:?string}
     */
    protected static function build(string $title, string $description, string $url, string $type, ?string $image): array
    {
        return [
            'title' => $title,
            'description' => Str::limit(trim($description), 200),
            'url' => $url,
            'type' => $type,
            'image' => $image,
        ];
    }

    protected static function excerpt(?string $summary, ?string $richContent, ?SiteSetting $siteSetting = null): string
    {
        $candidate = filled($summary)
            ? $summary
            : strip_tags($richContent ? RichText::render($richContent) : '');

        if (filled($candidate)) {
            return Str::limit(trim($candidate), 200);
        }

        return trim($siteSetting?->site_description ?: config('app.name', 'PPMA'));
    }

    protected static function fallbackImage(?SiteSetting $siteSetting = null): ?string
    {
        return self::storageUrl($siteSetting?->hero_fallback_image_path)
            ?? self::storageUrl($siteSetting?->logo_path);
    }

    protected static function storageUrl(?string $path): ?string
    {
        if (! filled($path)) {
            return null;
        }

        return asset('storage/'.$path);
    }
}
