// src/components/SEO.jsx
import { useEffect } from 'react';

export default function SEO({
    title,
    description,
    keywords = [""],
    image = '/og-image.png',
    url = window.location.href
}) {
    useEffect(() => {
        // Update title
        if (title) {
            document.title = title;
        }

        // Update or create meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Standard meta tags
        if (description) {
            updateMetaTag('description', description);
        }

        if (keywords.length > 0) {
            updateMetaTag('keywords', keywords.join(', '));
        }

        // Open Graph tags
        if (title) {
            updateMetaTag('og:title', title, true);
        }
        if (description) {
            updateMetaTag('og:description', description, true);
        }
        if (image) {
            updateMetaTag('og:image', image, true);
        }
        if (url) {
            updateMetaTag('og:url', url, true);
        }
        updateMetaTag('og:type', 'website', true);


    }, [title, description, keywords, image, url]);

    return null;
}