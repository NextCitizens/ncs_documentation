# playAnimation

```lua
NCs.Ped:playAnimation(pedId, dict, anim, flag, blendin, blendout, playbackRate, duration)
```

### Arguments
| Argument     | Type   | Optional   | Default | Explanation                         |
|--------------|--------|------------|---------|-------------------------------------|
| pedId        | number | false      | -       | The ID of the ped.                  |
| dict         | string | false      | -       | The Name of the animation direction |
| anim         | string | false      | -       | The Name of the animation           |
| flag         | number | false      | -       | -                                   |
| blendin      | number | false      | -       | Duration to start the animation     |
| blendout     | number | false      | -       | Duration to stop the animation      |
| playbackRate | number | false      | -       | -                                   |
| duration     | number | false      | -       | Duration of the animation           |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped:playAnimation(client, 'amb@code_human_cower@female@exit', 'exit', 1.0, 1.0, 1.0, 1.0, 1000)
```

List of animations name [here](https://alexguirre.github.io/animations-list/)