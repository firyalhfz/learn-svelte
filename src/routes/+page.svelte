<script>
  import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
  const handleClick = () => {
    console.log('Placing your order');
    goto('/products', { replaceState: true });
  };

  beforeNavigate((navigation) => {
    console.log('Before navigation:', navigation);
  });

  afterNavigate((navigation) => {
    console.log('After navigation:', navigation);
  });
</script>

<h1>Welcome Home</h1>

<a href="/blog">Blog</a>
<a href="/products">Products</a>

<button on:click={handleClick}>Place Order</button>
