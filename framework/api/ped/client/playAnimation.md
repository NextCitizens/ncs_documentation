# playAnimation

```lua
NCs.Ped:playAnimation(pedId, dict, anim, flag, blendin, blendout, playbackRate, duration)
```

### Examples
```lua
local client = PlayerPedId()
NCs.Ped:playAnimation(client, 'amb@code_human_cower@female@exit', 'exit', 1.0, 1.0, 1.0, 1.0, 1000)
```

List of animations name [here](https://alexguirre.github.io/animations-list/)