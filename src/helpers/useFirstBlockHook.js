import { __ } from '@wordpress/i18n';
import { select, useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

/**
 * Avoids that the block given by id is moved from the first position.
 * If it is moved, it is moved back to the first position with a dismisable error message
 *
 * @param {string} clientId - The identifier of the block
 * @returns boolean, but it is not important. What it matters is what it does
 */
export default function useFirstBlock( clientId ) {
	const { resetBlocks } = useDispatch( 'core/block-editor' );
	const { createErrorNotice } = useDispatch( 'core/notices' );
	const bIndex = useSelect( ( select ) =>
		select( 'core/block-editor' ).getBlockIndex( clientId )
	);
	console.log( '%c Rendered', 'font-size:1.5rem;', bIndex );

	// const [ blockPos, setBlockPos ] = useState( false );
	useEffect( () => {
		console.log( 'bIndex has changed', bIndex );
		const [ indexA, indexB ] = [ bIndex, 0 ];
		const allBlocks = select( 'core/block-editor' ).getBlocks();
		const numberOfBlocks = allBlocks.length;

		// Validation: check we are trying to swap two existing position of blocks.
		if ( bIndex === 0 ) return false;
		if ( indexA >= numberOfBlocks || indexB >= numberOfBlocks ) {
			return false;
		}

		// swapt with array deconstruction.
		[ allBlocks[ indexA ], allBlocks[ indexB ] ] = [
			allBlocks[ indexB ],
			allBlocks[ indexA ],
		];
		console.log( '%c swaping blocks', 'font-size:2rem;', allBlocks );

		resetBlocks( allBlocks );

		createErrorNotice(
			__(
				'Ooops, you have tried to move the block SIMPLE BLOCK to the second position. Sorry, this is not allowed.',
				'simple-block'
			),
			{
				id: 'error-pos-0',
				type: 'snackbar',
				explicitDismiss: true,
			}
		);

		return true;
	}, [ bIndex ] );

	return true;
}
