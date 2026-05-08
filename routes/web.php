<?php

use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\VirtualTourController;
use App\Livewire\Admin\ContactMessages\Index as AdminContactMessageIndex;
use App\Livewire\Admin\Gallery\Create as AdminGalleryCreate;
use App\Livewire\Admin\Gallery\Edit as AdminGalleryEdit;
use App\Livewire\Admin\Gallery\Index as AdminGalleryIndex;
use App\Livewire\Admin\Pages\Create as AdminPageCreate;
use App\Livewire\Admin\Pages\Edit as AdminPageEdit;
use App\Livewire\Admin\Pages\Index as AdminPageIndex;
use App\Livewire\Admin\Posts\Create as AdminPostCreate;
use App\Livewire\Admin\Posts\Edit as AdminPostEdit;
use App\Livewire\Admin\Posts\Index as AdminPostIndex;
use App\Livewire\Admin\SiteSettings\Edit as AdminSiteSettingsEdit;
use App\Livewire\Admin\StudentWorks\Create as AdminStudentWorkCreate;
use App\Livewire\Admin\StudentWorks\Edit as AdminStudentWorkEdit;
use App\Livewire\Admin\StudentWorks\Index as AdminStudentWorkIndex;
use App\Livewire\Admin\Users\Create as AdminUserCreate;
use App\Livewire\Admin\Users\Edit as AdminUserEdit;
use App\Livewire\Admin\Users\Index as AdminUserIndex;
use App\Models\GalleryAlbum;
use App\Models\Page;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\SiteSetting;
use App\Models\StudentWork;
use App\Models\WorkCategory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Route;

// $renderPublishedPage = function (string $slug) {
//     return view('public.page', [
//         'siteSetting' => SiteSetting::query()->first(),
//         'page' => Page::query()->where('slug', $slug)->where('status', 'published')->firstOrFail(),
//     ]);
// };

Route::get('/virtualtour', [VirtualTourController::class, 'index'])
    ->name('virtual-tour.index');

// add sidebar navigation for profile sections, but only for predefined slugs to avoid exposing unintended pages
$renderPublishedPage = function (string $slug) {
    $profilePages = Page::query()
        ->whereIn('slug', Page::profileNavigationSlugs())
        ->where('status', 'published')
        ->orderBy('sort_order')
        ->get();

    $latestGalleryAlbums = GalleryAlbum::query()
        ->with('images')
        ->where('status', 'published')
        ->orderByDesc('published_at')
        ->limit(3)
        ->get();

    $latestStudentWorks = StudentWork::query()
        ->with(['category', 'uploader'])
        ->where('status', 'published')
        ->orderByDesc('published_at')
        ->limit(3)
        ->get();

    return view('public.page', [
        'siteSetting' => SiteSetting::query()->first(),
        'page' => Page::query()
            ->where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail(),
        'profilePages' => $profilePages,
        'latestPosts' => Post::query()
            ->where('status', 'published')
            ->orderByDesc('published_at')
            ->limit(3)
            ->get(),
        'latestGalleryAlbums' => $latestGalleryAlbums,
        'latestStudentWorks' => $latestStudentWorks,
    ]);
};

Route::get('/', function () {
    $siteSetting = SiteSetting::query()->first();

    $profilePage = Page::query()
        ->where('slug', 'profil')
        ->where('status', 'published')
        ->first();

    $educationPage = Page::query()
        ->where('slug', 'pendidikan')
        ->where('status', 'published')
        ->first();

    $latestPosts = Post::query()
        ->with(['category', 'author'])
        ->where('status', 'published')
        ->orderByDesc('published_at')
        ->limit(3)
        ->get();

    $latestWorks = StudentWork::query()
        ->with(['category', 'uploader'])
        ->where('status', 'published')
        ->orderByDesc('published_at')
        ->limit(3)
        ->get();

    $galleryAlbums = GalleryAlbum::query()
        ->with('images')
        ->where('status', 'published')
        ->orderByDesc('published_at')
        ->limit(3)
        ->get();

    return view('welcome', [
        'siteSetting' => $siteSetting,
        'profilePage' => $profilePage,
        'educationPage' => $educationPage,
        'latestPosts' => $latestPosts,
        'latestWorks' => $latestWorks,
        'galleryAlbums' => $galleryAlbums,
    ]);
})->name('home');

Route::post('/kontak', ContactMessageController::class)
    ->middleware('throttle:6,1')
    ->name('kontak.store');

Route::get('/kontak', function () {
    return view('public.contact', [
        'siteSetting' => SiteSetting::query()->first(),
    ]);
})->name('kontak.show');

Route::get('/profil', function () use ($renderPublishedPage) {
    return $renderPublishedPage('profil');
})->name('profil.show');

Route::get('/pendidikan', function () use ($renderPublishedPage) {
    return $renderPublishedPage('pendidikan');
})->name('pendidikan.show');

// Route::get('/profil/{page:slug}', function (Page $page) {
//     abort_unless($page->status === 'published', 404);
//     abort_unless(in_array($page->slug, Page::profileNavigationSlugs(), true), 404);

//     return view('public.page', [
//         'siteSetting' => SiteSetting::query()->first(),
//         'page' => $page,
//     ]);
// })->name('profil.section.show');

// add sidebar navigation for profile sections, but only for predefined slugs to avoid exposing unintended pages
Route::get('/profil/{page:slug}', function (Page $page) {
    abort_unless($page->status === 'published', 404);
    abort_unless(in_array($page->slug, Page::profileNavigationSlugs(), true), 404);

    $profilePages = Page::query()
        ->whereIn('slug', Page::profileNavigationSlugs())
        ->where('status', 'published')
        ->orderBy('sort_order')
        ->get();

    $latestGalleryAlbums = GalleryAlbum::query()
        ->with('images')
        ->where('status', 'published')
        ->orderByDesc('published_at')
        ->limit(3)
        ->get();

    $latestStudentWorks = StudentWork::query()
        ->with(['category', 'uploader'])
        ->where('status', 'published')
        ->orderByDesc('published_at')
        ->limit(3)
        ->get();

    return view('public.page', [
        'siteSetting' => SiteSetting::query()->first(),
        'page' => $page,
        'profilePages' => $profilePages,
        'latestGalleryAlbums' => $latestGalleryAlbums,
        'latestStudentWorks' => $latestStudentWorks,
    ]);
})->name('profil.section.show');

Route::get('/berita', function () {
    $search = trim((string) request('search', ''));
    $category = trim((string) request('category', ''));

    return view('public.posts.index', [
        'siteSetting' => SiteSetting::query()->first(),
        'postCategories' => PostCategory::query()->orderBy('name')->get(),
        'posts' => Post::query()
            ->with(['category', 'author'])
            ->where('status', 'published')
            ->when($category !== '', function (Builder $query) use ($category): void {
                $query->whereHas('category', fn (Builder $categoryQuery) => $categoryQuery->where('slug', $category));
            })
            ->when($search !== '', function (Builder $query) use ($search): void {
                $query->where(function (Builder $innerQuery) use ($search): void {
                    $innerQuery
                        ->where('title', 'like', '%'.$search.'%')
                        ->orWhere('excerpt', 'like', '%'.$search.'%')
                        ->orWhere('content', 'like', '%'.$search.'%');
                });
            })
            ->orderByDesc('published_at')
            ->paginate(6)
            ->withQueryString()
            ->fragment('daftar-berita'),
    ]);
})->name('berita.index');

Route::get('/berita/{post:slug}', function (Post $post) {
    abort_unless($post->status === 'published', 404);

    $post->load(['category', 'author']);

    $relatedPosts = Post::query()
        ->with('category')
        ->where('status', 'published')
        ->whereKeyNot($post->getKey())
        ->when($post->post_category_id, function (Builder $query) use ($post): void {
            $query->where('post_category_id', $post->post_category_id);
        })
        ->orderByDesc('published_at')
        ->limit(3)
        ->get();

    if ($relatedPosts->count() < 3) {
        $additionalPosts = Post::query()
            ->with('category')
            ->where('status', 'published')
            ->whereKeyNot($post->getKey())
            ->whereNotIn('id', $relatedPosts->pluck('id'))
            ->orderByDesc('published_at')
            ->limit(3 - $relatedPosts->count())
            ->get();

        $relatedPosts = $relatedPosts->concat($additionalPosts);
    }

    return view('public.posts.show', [
        'siteSetting' => SiteSetting::query()->first(),
        'post' => $post,
        'relatedPosts' => $relatedPosts,
    ]);
})->name('berita.show');

Route::get('/karya-santri', function () {
    $search = trim((string) request('search', ''));
    $category = trim((string) request('category', ''));

    return view('public.student-works.index', [
        'siteSetting' => SiteSetting::query()->first(),
        'workCategories' => WorkCategory::query()->orderBy('name')->get(),
        'studentWorks' => StudentWork::query()
            ->with(['category', 'uploader'])
            ->where('status', 'published')
            ->when($category !== '', function (Builder $query) use ($category): void {
                $query->whereHas('category', fn (Builder $categoryQuery) => $categoryQuery->where('slug', $category));
            })
            ->when($search !== '', function (Builder $query) use ($search): void {
                $query->where(function (Builder $innerQuery) use ($search): void {
                    $innerQuery
                        ->where('title', 'like', '%'.$search.'%')
                        ->orWhere('author_name', 'like', '%'.$search.'%')
                        ->orWhere('excerpt', 'like', '%'.$search.'%')
                        ->orWhere('content', 'like', '%'.$search.'%');
                });
            })
            ->orderByDesc('published_at')
            ->paginate(6)
            ->withQueryString()
            ->fragment('daftar-karya'),
    ]);
})->name('karya-santri.index');

Route::get('/karya-santri/{studentWork:slug}', function (StudentWork $studentWork) {
    abort_unless($studentWork->status === 'published', 404);

    $studentWork->load(['category', 'uploader']);

    $relatedWorks = StudentWork::query()
        ->with('category')
        ->where('status', 'published')
        ->whereKeyNot($studentWork->getKey())
        ->when($studentWork->work_category_id, function (Builder $query) use ($studentWork): void {
            $query->where('work_category_id', $studentWork->work_category_id);
        })
        ->orderByDesc('published_at')
        ->limit(3)
        ->get();

    if ($relatedWorks->count() < 3) {
        $additionalWorks = StudentWork::query()
            ->with('category')
            ->where('status', 'published')
            ->whereKeyNot($studentWork->getKey())
            ->whereNotIn('id', $relatedWorks->pluck('id'))
            ->orderByDesc('published_at')
            ->limit(3 - $relatedWorks->count())
            ->get();

        $relatedWorks = $relatedWorks->concat($additionalWorks);
    }

    return view('public.student-works.show', [
        'siteSetting' => SiteSetting::query()->first(),
        'studentWork' => $studentWork,
        'relatedWorks' => $relatedWorks,
    ]);
})->name('karya-santri.show');

Route::get('/galeri', function () {
    $search = trim((string) request('search', ''));
    $year = trim((string) request('year', ''));

    return view('public.gallery.index', [
        'siteSetting' => SiteSetting::query()->first(),
        'albumYears' => GalleryAlbum::query()
            ->where('status', 'published')
            ->whereNotNull('event_date')
            ->orderByDesc('event_date')
            ->get()
            ->pluck('event_date')
            ->filter()
            ->map(fn ($eventDate) => $eventDate->format('Y'))
            ->unique()
            ->values(),
        'albums' => GalleryAlbum::query()
            ->with('images')
            ->where('status', 'published')
            ->when($year !== '', fn (Builder $query) => $query->whereYear('event_date', (int) $year))
            ->when($search !== '', function (Builder $query) use ($search): void {
                $query->where(function (Builder $innerQuery) use ($search): void {
                    $innerQuery
                        ->where('title', 'like', '%'.$search.'%')
                        ->orWhere('description', 'like', '%'.$search.'%');
                });
            })
            ->orderByDesc('published_at')
            ->paginate(6)
            ->withQueryString()
            ->fragment('daftar-galeri'),
    ]);
})->name('galeri.index');

Route::get('/galeri/{galleryAlbum:slug}', function (GalleryAlbum $galleryAlbum) {
    abort_unless($galleryAlbum->status === 'published', 404);

    return view('public.gallery.show', [
        'siteSetting' => SiteSetting::query()->first(),
        'album' => $galleryAlbum->load('images'),
        'relatedAlbums' => GalleryAlbum::query()
            ->with('images')
            ->where('status', 'published')
            ->whereKeyNot($galleryAlbum->getKey())
            ->orderByDesc('published_at')
            ->limit(3)
            ->get(),
    ]);
})->name('galeri.show');

Route::middleware(['auth', 'verified', 'content.role:admin,redaksi'])->group(function () {
    Route::get('dashboard', function () {
        $user = auth()->user();

        return view('dashboard', [
            'stats' => [
                'pages' => $user?->canManagePages() ? Page::query()->count() : null,
                'posts' => $user?->canManagePosts() ? Post::query()->count() : null,
                'studentWorks' => $user?->canManageStudentWorks() ? StudentWork::query()->count() : null,
                'galleryAlbums' => $user?->canManageGallery() ? GalleryAlbum::query()->count() : null,
            ],
            'latestPosts' => $user?->canManagePosts()
                ? Post::query()->with('category')->latest('published_at')->limit(4)->get()
                : collect(),
            'latestWorks' => $user?->canManageStudentWorks()
                ? StudentWork::query()->with('category')->latest('published_at')->limit(4)->get()
                : collect(),
            'latestAlbums' => $user?->canManageGallery()
                ? GalleryAlbum::query()->latest('published_at')->limit(4)->get()
                : collect(),
        ]);
    })->name('dashboard');

    Route::livewire('dashboard/berita', AdminPostIndex::class)->name('admin.posts.index');
    Route::livewire('dashboard/berita/tambah', AdminPostCreate::class)->name('admin.posts.create');
    Route::livewire('dashboard/berita/{post}/edit', AdminPostEdit::class)->name('admin.posts.edit');
    Route::livewire('dashboard/galeri', AdminGalleryIndex::class)->name('admin.gallery.index');
    Route::livewire('dashboard/galeri/tambah', AdminGalleryCreate::class)->name('admin.gallery.create');
    Route::livewire('dashboard/galeri/{galleryAlbum}/edit', AdminGalleryEdit::class)->name('admin.gallery.edit');
    Route::livewire('dashboard/karya-santri', AdminStudentWorkIndex::class)->name('admin.student-works.index');
    Route::livewire('dashboard/karya-santri/tambah', AdminStudentWorkCreate::class)->name('admin.student-works.create');
    Route::livewire('dashboard/karya-santri/{studentWork}/edit', AdminStudentWorkEdit::class)->name('admin.student-works.edit');
});

Route::middleware(['auth', 'verified', 'content.role:admin'])->group(function () {
    Route::livewire('dashboard/user', AdminUserIndex::class)->name('admin.users.index');
    Route::livewire('dashboard/user/tambah', AdminUserCreate::class)->name('admin.users.create');
    Route::livewire('dashboard/user/{user}/edit', AdminUserEdit::class)->name('admin.users.edit');
    Route::livewire('dashboard/halaman', AdminPageIndex::class)->name('admin.pages.index');
    Route::livewire('dashboard/halaman/tambah', AdminPageCreate::class)->name('admin.pages.create');
    Route::livewire('dashboard/halaman/{page}/edit', AdminPageEdit::class)->name('admin.pages.edit');
    Route::livewire('dashboard/kontak', AdminContactMessageIndex::class)->name('admin.contact-messages.index');
    Route::livewire('dashboard/pengaturan-situs', AdminSiteSettingsEdit::class)->name('admin.site-settings.edit');
});

require __DIR__.'/settings.php';
