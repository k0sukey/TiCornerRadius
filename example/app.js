var TiCornerRadius = require('be.k0suke.ticornerradius');

var win = Ti.UI.createWindow({
	backgroundColor: '#fff'
});

var view0 = Ti.UI.createView({
	width: Ti.UI.FILL,
	height: Ti.UI.FILL
});

view0.add(Ti.UI.createView({
	top: 100,
	left: 20,
	width: 80,
	height: 80,
	backgroundColor: '#0074d9',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_TOP_LEFT,
		radii: {
			width: 20,
			height: 20
		},
		border: {
			width: 2,
			color: '#000'
		}
	}
}));

view0.add(Ti.UI.createView({
	top: 100,
	width: 80,
	height: 80,
	backgroundColor: '#39cccc',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_TOP_LEFT | TiCornerRadius.CORNER_TOP_RIGHT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

view0.add(Ti.UI.createView({
	top: 100,
	right: 20,
	width: 80,
	height: 80,
	backgroundColor: '#2ecc40',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_TOP_RIGHT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

view0.add(Ti.UI.createView({
	top: 200,
	left: 20,
	width: 80,
	height: 80,
	backgroundColor: '#ffdc00',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_TOP_LEFT | TiCornerRadius.CORNER_BOTTOM_LEFT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

view0.add(Ti.UI.createView({
	top: 200,
	width: 80,
	height: 80,
	backgroundColor: '#ff4136',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_ALL_CORNERS,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

view0.add(Ti.UI.createView({
	top: 200,
	right: 20,
	width: 80,
	height: 80,
	backgroundColor: '#f012be',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_TOP_RIGHT | TiCornerRadius.CORNER_BOTTOM_RIGHT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

view0.add(Ti.UI.createView({
	top: 300,
	left: 20,
	width: 80,
	height: 80,
	backgroundColor: '#ddd',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_BOTTOM_LEFT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

view0.add(Ti.UI.createView({
	top: 300,
	width: 80,
	height: 80,
	backgroundColor: '#aaa',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_BOTTOM_LEFT | TiCornerRadius.CORNER_BOTTOM_RIGHT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

view0.add(Ti.UI.createView({
	top: 300,
	right: 20,
	width: 80,
	height: 80,
	backgroundColor: '#000',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_BOTTOM_RIGHT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

var view1 = Ti.UI.createView({
	width: Ti.UI.FILL,
	height: Ti.UI.FILL
});

view1.add(Ti.UI.createView({
	top: 100,
	left: 20,
	width: 80,
	height: 80,
	backgroundColor: '#0074d9',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_TOP_LEFT | TiCornerRadius.CORNER_TOP_RIGHT | TiCornerRadius.CORNER_BOTTOM_LEFT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

view1.add(Ti.UI.createView({
	top: 100,
	right: 20,
	width: 80,
	height: 80,
	backgroundColor: '#2ecc40',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_TOP_LEFT | TiCornerRadius.CORNER_TOP_RIGHT | TiCornerRadius.CORNER_BOTTOM_RIGHT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

view1.add(Ti.UI.createView({
	top: 200,
	left: 20,
	width: 80,
	height: 80,
	backgroundColor: '#ffdc00',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_TOP_LEFT | TiCornerRadius.CORNER_BOTTOM_RIGHT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

view1.add(Ti.UI.createView({
	top: 200,
	right: 20,
	width: 80,
	height: 80,
	backgroundColor: '#f012be',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_TOP_RIGHT | TiCornerRadius.CORNER_BOTTOM_LEFT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

view1.add(Ti.UI.createView({
	top: 300,
	left: 20,
	width: 80,
	height: 80,
	backgroundColor: '#ddd',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_TOP_LEFT | TiCornerRadius.CORNER_BOTTOM_LEFT | TiCornerRadius.CORNER_BOTTOM_RIGHT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

view1.add(Ti.UI.createView({
	top: 300,
	right: 20,
	width: 80,
	height: 80,
	backgroundColor: '#000',
	cornerRadius: {
		corners: TiCornerRadius.CORNER_TOP_RIGHT | TiCornerRadius.CORNER_BOTTOM_LEFT | TiCornerRadius.CORNER_BOTTOM_RIGHT,
		radii: {
			width: 20,
			height: 20
		}
	}
}));

win.add(Ti.UI.createScrollableView({
	views: [view0, view1]
}));

win.open();