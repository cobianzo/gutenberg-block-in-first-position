import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

// Use this if you prefer to use the component instead of the hook.
// import CheckFirstPosition from './helpers/CheckFirstPosition';

// Use this if you prefer to use the custom hook instead of the component.
import useFirstBlock from './helpers/useFirstBlockHook';

export default function Edit( props ) {
	// This makes the job - ensures that the block is not moved from the first position.
	useFirstBlock( props.clientId );

	return (
		<div { ...useBlockProps() }>
			{ /* <CheckFirstPosition clientId={ props.clientId } /> */ }
			{ __(
				'This block MUST BE ALWAYS in first position',
				'simple-block'
			) }
		</div>
	);
}
