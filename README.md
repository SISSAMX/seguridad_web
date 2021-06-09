# Seguridad en América Landing page

this project is made in Nextjs

## Installation

Use yarn to install foobar.

```bash
yarn install
```

## Usage

```yarn
yarn dev
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


And if you think I deserve a beer 🍻 or ice cream 🍦, I'll gladly accept it.

## i18n
For add translate strings into a component:

```
import useTranslation from "@hooks/useTranslation";
```
and destructuring like this: 

```
const { t, locale } = useTranslation();
```

Then, to pass data string, add this

```
{ t("somethingString") }
```


For add translate word ./src/translation/locales/{lang}

## License
[MIT](https://choosealicense.com/licenses/mit/)