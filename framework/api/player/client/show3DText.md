# show3DText  

```lua
NCs.Player:show3DText(x, y, z, text, font, scale)
```

### Arguments
| Argument | Type     | Optional   | Default | Explanation           |
|----------|----------|------------|---------|-----------------------|
| x        | number   | false      | -       | The X Position        |
| y        | number   | false      | -       | The Y Position        |
| z        | number   | false      | -       | The Z Position        |
| text     | string   | false      | -       | Text to display       |
| font     | number   | false      | -       | The font of the text  |
| scale    | number   | false      | -       | The scale of the text |

### Examples
```lua
NCs.Player:show3DText(NCs.Ped:getPosition(PlayerPedId()), 'Hello World!', 4, 5.0)
```

![App Screenshot](https://cdn.discordapp.com/attachments/859092448427638804/982913525548736573/unknown.png)