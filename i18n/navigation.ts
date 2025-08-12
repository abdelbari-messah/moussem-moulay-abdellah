import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);


export function createLocalizedPath(path: string, locale: string): string {
    // If path already starts with locale, replace it
    if (path.startsWith('/')) {
        const segments = path.split('/');
        // Check if the path already includes a locale
        if (segments.length > 1 && routing.locales.includes(segments[1] as any)) {
            segments[1] = locale;
            return segments.join('/');
        }
        // Path doesn't have locale yet, insert it
        return `/${locale}${path === '/' ? '' : path}`;
    }
    // Handle paths that don't start with /
    return `/${locale}/${path}`;
}