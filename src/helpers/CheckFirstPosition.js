import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

import { select, useDispatch } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';
import { store as blockEditorStore } from '@wordpress/block-editor';

/**
 * Component that shows an error message to when the user tries to move the parent block
 * to a position that is not allowed. At the moment the only allowed position is the first one.
 * Usage in the parent, in the JSX render:  <CheckFirstPosition clientId={ props.clientId } />
 * @param { string } cliendId - The identifier of the block
 * @returns null (optionally you can include som JSX)
 */
export default function CheckFirstPosition( { clientId } ) {
	const { createErrorNotice } = useDispatch( noticesStore );
	const { resetBlocks } = useDispatch( blockEditorStore );
	const [ noticeStatus, setNoticeStatus ] = useState( false ); // true means the notice was shown.

	useEffect( () => {
		const bIndex = select( blockEditorStore ).getBlockIndex( clientId );
		if ( bIndex > 0 ) {
			// we move the block back to the first position (position 0).
			const [ indexA, indexB ] = [ bIndex, 0 ];
			const allBlocks = select( blockEditorStore ).getBlocks();
			const numberOfBlocks = allBlocks.length;

			// Validation: check we are trying to swap two existing position of blocks.
			if ( indexA >= numberOfBlocks || indexB >= numberOfBlocks ) {
				return false;
			}

			// swapt with array deconstruction.
			[ allBlocks[ indexA ], allBlocks[ indexB ] ] = [
				allBlocks[ indexB ],
				allBlocks[ indexA ],
			];
			// console.log( '%c swaping blocks', 'font-size:2rem;', allBlocks );

			resetBlocks( allBlocks );

			if ( ! noticeStatus )
				createErrorNotice(
					__(
						'Ooops, you have tried to move the block JANDER to the second position. Sorry, this is not allowed.',
						'aaa'
					),
					{
						id: 'error-pos-0',
						type: 'snackbar',
						explicitDismiss: true,
					}
				);
			setNoticeStatus( true );
		} else {
			// removeNotice( 'error-pos-0' );
		}
		return null; // no need to create fn to remove notice.
	} );
	return null; //JSXL <div>If you want to show a message in the block, do it here.</div>;
}
