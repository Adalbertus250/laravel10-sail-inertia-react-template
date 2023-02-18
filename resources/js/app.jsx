import '@assets/css/tailwind.css'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createRoot } from 'react-dom/client'

createInertiaApp({
    title: name => `Laravel 10 - Inertia & react template - ${name}`,
    resolve: name => resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/*.jsx')),
    setup({el, App, props}) {
        createRoot(el).render(<App {...props} />);
    }
});
