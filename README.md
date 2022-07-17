# SIMPLE BLOCK

This repository represents this situation:
A simple block that MUST be in the first position of the Post.

We created a component `<CheckFirstPosition clientId={ props.clientId } />`  
It ensures that the block containint it will always be in the first position.

The php declares the template that propulates the block in the first position and locks it.

```
$post_type_object->template = array(
		array(
			'create-block/simple-block',
			array(
				'content' => 'THI SOI THE',
				'lock'    => array(
					'move'   => true,
					'remove' => true,
				),
			),
		),
	);
```

Check it out!
