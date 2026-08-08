
# This is a very important React concept to understand before learning Context API.
 when i write this 

 <div>
  <Navbar theme={theme}>
    <h2>Hello1</h2>
    <h2>Hello2</h2>
  </Navbar>
</div>


  1. React is actually calling your component like this:

                    Navbar({
                    theme: theme,
                    children: [
                        <h2>Hello1</h2>,
                        <h2>Hello2</h2>
                    ]
                    });
  2. children is automatically added by React. It contains everything between the opening and closing tags of the component.
  3. What is children?
        Anything you write inside a component becomes its children.
    
  4. Before wrapping:
        <App />
        After wrapping:

        ThemeContext
        │
        └── Provider (value = "AHIL MAKWANA")
              │
              └── App
                  │
                  ├── Navbar
                  │     └── Button
                  │
                  └── Footer