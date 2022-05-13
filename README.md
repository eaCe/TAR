# TAR - Tailwindcss - Alpine.js - REDAXO
### Eine einfache Möglichkeit REDAXO mit Tailwindcss zu nutzen

---

**Installation:**

`yarn install` oder `npm install`

Die gewünschte REDAXO Version in den App Ordner legen.

`proxy` in webpack.mix anpassen

tailwind.config anpassen, wenn gewünscht - https://tailwindcss.com/docs/configuration



---

**Nutzung:**

Watch: `yarn start` oder `npm start`

Build: `yarn build` oder `npm build`

Build Production: `yarn build:production` oder `npm build:production`

Helper für den Asset-Pfad:

```php
function mix($path) {
    $manifestPath = rex_path::frontend('dist/mix-manifest.json');

    static $manifest;

    if (!$manifest) {
        if (!file_exists($manifestPath)) {
            throw new Exception('The Mix manifest does not exist.');
        }

        $manifest = json_decode(file_get_contents($manifestPath), true);
    }

    if (strpos($path, '/') !== 0) {
        $path = "/{$path}";
    }

    if (!array_key_exists($path, $manifest)) {
        throw new Exception(
            "Unable to locate Mix file: {$path}. Please check your " .
            'webpack.mix.js output paths and try again.'
        );
    }

    return rex_url::frontend('dist'.$manifest[$path]);
}

//mix('/styles/app.css');
//mix('/scripts/app.js');
```

