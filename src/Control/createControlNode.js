import { addClass } from '../utils/class';
import { setStyles } from '../utils/style';
import hasTouch from './hasTouch';
import { VERTICAL, CONTROL } from '../utils/constants';

export default function createControlNode ( control ) {
	var node = document.createElement( 'boxxy-control' );

	addClass( node, `boxxy-${control.type}-control` );

	setStyles( node, {
		position: 'absolute',
		userSelect: 'none',
		cursor: control.type === VERTICAL ? 'ew-resize' : 'ns-resize'
	});

	if ( hasTouch ) {
		addClass( node, 'boxxy-touch-control' );
	}

	if ( control.type === VERTICAL ) {
		setStyles( node, {
			width: '0',
			height: '100%'
		});
	} else {
		setStyles( node, {
			width: '100%',
			height: '0'
		});
	}

	node[ CONTROL ] = control;

	return node;
}
