<script>
  import { page } from '$app/stores';
  const greetings = {
    en: 'Hello!',
    es: 'Holla!',
    fr: 'Bonjour!',
    in: 'Hai!'
  };

  const { lang = 'en' } = $page.params;
  const greeting = greetings[lang];
</script>

<h1>{greeting}</h1>
