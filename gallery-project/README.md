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