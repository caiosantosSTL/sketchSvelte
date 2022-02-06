<script>
    import Newpage from "./Newpage.svelte";
    import Inputapi from "./Inputapi.svelte";
    import Times from "./Times.svelte";
    import Add from "./Addnumber.svelte";
    import If from "./Ifs.svelte";
    import If2 from "./Ifs2.svelte";
</script>

<main>
    <Newpage cont={0}/>
    <Newpage cont={10}/>
    
    <Inputapi/>
    
    <Times/>
    
    <Add/>
    <If/>
    <If2 x={12}/>

</main>
