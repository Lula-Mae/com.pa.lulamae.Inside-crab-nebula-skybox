try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: 'Inside Crab Nebula by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.Inside-crab-nebula-skybox/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}