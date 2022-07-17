import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import CheckFirstPosition from './helpers/CheckFirstPosition';

export default function Edit( props ) {
	return (
		<div { ...useBlockProps() }>
			<CheckFirstPosition clientId={ props.clientId } />
			{ __(
				'This block MUST BE ALWAYS in first position',
				'simple-block'
			) }
		</div>
	);
}
