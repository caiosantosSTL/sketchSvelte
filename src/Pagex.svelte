<script>
    import Newpage from "./Newpage.svelte";
    import Inputapi from "./Inputapi.svelte";
    import Times from "./Times.svelte";
    import Add from "./Addnumber.svelte";
    import If from "./Ifs.svelte";
    import If2 from "./Ifs2.svelte";
    import Loop from "./Loop.svelte";
    import Promise from "./Promise.svelte";
    import Dome from "./DOMevent.svelte";
    import Bind from "./Bind.svelte";
    import Bind2 from "./Bind2.svelte";
    import Bind3 from "./Bind3.svelte";
    import OnMount from "./onMount.svelte";
    import Trans1 from "./Trans1.svelte";
    import Trans2 from "./Trans2.svelte";
    import Trans3 from "./Trans3.svelte";


</script>

<main>
    <Newpage cont={0}/>
    <Newpage cont={10}/>
    
    <Inputapi/>
    
    <Times/>
    
    <Add/>
    <If/>
    <If2 x={12}/>
    <Loop/>
    
    <Dome/>
    <Bind/>
    <Bind2 />
    <Bind3 />
    <OnMount/>
    <Trans1/>
    <Trans2/>
    <Trans3/>

</main>
