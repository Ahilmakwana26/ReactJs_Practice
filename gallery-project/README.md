# React js key uses

   1. key is a special prop in React. It is used internally by React and is NOT passed to your component as a normal prop.
   2.  React uses key={index} to identify each component in the list, but it removes it before your component receives the props.


   3. The only place key should be is where you're mapping:

            userData.map((e, index) => (
            <Card
                key={index}
                prop={e}
                index={index}
            />
            ));

    4. added simple pagination with separete components 
    5. now make more batter gallery project

        for that need to work with scroll , call image api on scroll and append data into array 

        scroll detection
             
        | Property                                | Meaning                              | Example  |
| --------------------------------------- | ------------------------------------ | -------- |
| `window.scrollY`                        | How far you've scrolled from the top | `1500px` |
| `window.innerHeight`                    | Height of the visible browser window | `800px`  |
| `document.documentElement.scrollHeight` | Total height of the entire page      | `3200px` |


//[...[], ...[{ id: 1 }, { id: 2 }]]