# registerKeyMapping

```lua
    NCs:registerKeyMapping(key, command, label, input, onPressed, onReleased)
```

This function saves binds. It supports the pressure and the release of the key

## Arguments
| Argument      | Type | Optional | Default | Description                                                                                       |
|---------------|-----------|----------|---------------|---------------------------------------------------------------------------------------------------|
| key           | string    | No       | -             |  The key to register                                                                          |
| command          | string    | No      | -          |   Command name                                                       |
| label          | string    | No      | -        | Command label                                                               |
| onPressed          | function    | No      | -        | Function executed when the key is pressed                                                                |
| onReleased          | function    | Yes      | -        | Function executed when the key is released                                                                |

## Exemple

```lua
-- basic exemple
NCs:registerKeyMapping(
    'F1',
    'NCS_demo',
    'NCS DEMO keybind API',
    'keyboard',
    function()
        print('Button pressed !')
    end,
    nil
)

-- exemple with released !
NCs:registerKeyMapping(
    'F1',
    'NCS_demo',
    'NCS DEMO keybind API',
    'keyboard',
    function()
        print('Button pressed !')
    end,
    function()
        print('Button released !')
    end
)
```