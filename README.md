# SIMPLE BLOCK

## What does it do?

This repository represents this situation:
A simple block that MUST be in the first position of the Post.

We offer two options to have this dome:

With a component (see `CheckFirstPosition.js` ):  
`<CheckFirstPosition clientId={ props.clientId } />`

Or

With a Custom Hook (see `useFirstBlockHook.js`)
`useFirstBlock( props.clientId );`

You can use the way you prefer. Both ensure that the block where you insert the snippet will always be in the first position.

## Locking the block

The **simple-block.php** declares the template that propulates the block in the first position and locks it:

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

This template, however, doesnt prevent that the second block is moved up to the first position. That is why we created this repository. The Component or the Hook does prevent it to happen.

## Test it

Move this project into your /wp-content/plugins/simple-block folder. You can do it by moving to the
`/wp-content/plugins` folder and type

`git clone git@github.com:cobianzo/gutenberg-block-in-first-position.git`

Then activate the Simple Block plugin.

Then create a new post.

And try to move the second block to the first position.

I dare you can't
