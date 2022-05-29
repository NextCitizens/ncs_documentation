# playAnimation

```lua
NCs.Ped:playAnimation(ped, dict, anim, flag, blendin, blendout, playbackRate, duration)
```

This function play animation on selected ped with multiple arguments. ([List of Animation](https://alexguirre.github.io/animations-list/))

## Arguments
| Argument      | Type | Optional | Default | Description                                                                                       |
|---------------|-----------|----------|---------------|---------------------------------------------------------------------------------------------------|
| ped           | string    | No       | -             | The ped going to play animation                                                                            |
| dict          | string    | No      | -          | The dict of the animation                                                         |
| anim          | string    | No      | -        | The animation identifier                                                               |
| flag          | number    | No      | -        | The flag of the animation                                                               |
| blendin          | number    | Yes      | 1.0        | To-do To-do To-do To-do To-do                                                               |
| blendout          | number    | Yes      | 1.0        | To-do To-do To-do To-do To-do                                                              |
| playbackRate          | number    | Yes      | 1.0        | Taux de répitition between 0.0 and 1.0                                                               |
| duration          | number    | Yes      | -1        | Duration of the animation in millisecond                                                               |

## Example
```lua
RegisterCommand("playAnimationTest", function()
    if source > 0 then 
        local player = PlayerPedId()
        NCs.Ped:playAnimation(player, "random@mugging3", "handsup_standing_base", 2.0, 2.5, -1, 49, -1)
    end
end)
```