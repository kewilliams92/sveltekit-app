<script lang='ts'>
    import type { PageData } from './$types'
    import { invalidate } from '$app/navigation';
    export let data: PageData;

    const noScroll = true;
    $: products = data.products.products 
</script>


<h2>{data.title}</h2>
<button on:click={() => {
    // invalidate(
    //     'app:products'
    // );
    invalidate('app:productsServerLoad')
}}>Rerun Load function</button>
{#if products && products.length > 0}
<ul data-sveltekit-preload-data="hover">
    {#each products as product}
    <li>
        <img src={product.thumbnail} alt={product.title} />
        <h3><a data-sveltekit-noscroll={noScroll ? "" : "off"} href='/product/{product.id}'>{product.title}</a></h3>
        <p>{product.description}</p>
    </li>
    {/each} 
</ul>
{/if}

<style>
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, minmax(0,1fr));
        gap: 30px;
    }
    img{
        width: 100%;
    }
</style>