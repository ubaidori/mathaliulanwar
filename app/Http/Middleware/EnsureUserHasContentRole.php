<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserHasContentRole
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$roles): Response
    {
        $allowedRoles = $roles !== [] ? $roles : ['admin', 'redaksi'];

        abort_unless(
            in_array($request->user()?->role, $allowedRoles, true),
            Response::HTTP_FORBIDDEN,
        );

        return $next($request);
    }
}
