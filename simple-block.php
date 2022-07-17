<?php
/**
 * Plugin Name:       Simple Block
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       simple-block
 *
 * @package           create-block
 */

add_action( 'init', 'create_block_simple_block_block_init' );
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_simple_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}

/** Creating a template */
add_action( 'init', 'blocks_course_plugin_register_template' );
function blocks_course_plugin_register_template() {
	$block_template = array(
		array(
			'create-block/simple-block',
			array(
				'content' => 'THIS is not neccessary. The content, I mean.',
				'lock'    => array(
					'move'   => true,
					'remove' => true,
				),
			),
		),
		array(
			'core/paragraph',
			array(
				'content' => 'This is the intruder block that you can try to move to the first position. This plugin will not allow it.',
			),
		),
	);

	$post_type_object           = get_post_type_object( 'post' );
	$post_type_object->template = $block_template;
}

