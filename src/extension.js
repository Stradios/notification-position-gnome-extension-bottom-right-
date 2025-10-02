import Clutter from 'gi://Clutter';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class NotificationPosition {
    constructor() {
        this._originalBannerAlignment = Main.messageTray.bannerAlignment;
        this._originalY = Main.messageTray._bannerBin.y_align;
    }

    rightBottom() {
        // Horizontal → right
        Main.messageTray.bannerAlignment = Clutter.ActorAlign.END;

        // Vertical → bottom
        Main.messageTray._bannerBin.set_y_align(Clutter.ActorAlign.END);
        Main.messageTray._bannerBin.set_anchor_y(1.0); // anchor bottom
    }

    _original() {
        Main.messageTray.bannerAlignment = this._originalBannerAlignment;
        Main.messageTray._bannerBin.set_y_align(this._originalY);
        Main.messageTray._bannerBin.set_anchor_y(0.0);
    }

    enable() {
        this.rightBottom();
    }

    disable() {
        this._original();
    }
}
