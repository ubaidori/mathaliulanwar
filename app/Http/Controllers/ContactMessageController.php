<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactMessageRequest;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;

class ContactMessageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(StoreContactMessageRequest $request): RedirectResponse
    {
        ContactMessage::create([
            ...$request->safe()->only([
                'name',
                'email',
                'phone',
                'subject',
                'message',
            ]),
            'phone' => $request->string('phone')->value() ?: null,
            'subject' => $request->string('subject')->value() ?: null,
            'is_read' => false,
            'read_at' => null,
        ]);

        $redirectRoute = $request->string('redirect_route')->value() ?: 'home';
        $redirectFragment = $request->string('redirect_fragment')->value() ?: 'kontak';

        return redirect()
            ->to(route($redirectRoute).'#'.$redirectFragment)
            ->with('contact_status', 'Pesan Anda berhasil dikirim. Tim kami akan menindaklanjuti secepatnya.');
    }
}
