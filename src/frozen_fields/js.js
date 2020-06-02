function onFrozen(idx) {
    wasFrozen = frozenFields[idx];
    pycmd("frozen:" + idx);
    wasFrozen = frozenFields[idx];
    frozenFields[idx] = !wasFrozen;
    $img = $(`#i${idx}`);
    if (wasFrozen) {
        $img.attr("src", src_unfrozen);
        $img.attr("title", "Freeze field ("+hotkey_toggle_field+")");
    } else {
        $img.attr("src", src_frozen);
        $img.attr("title", "Unfreeze field ("+hotkey_toggle_field+")");
    }
}

var frozenFields = null;

function setFrozenFields(frozen) {
    frozenFields = frozen;
    $fnames = $(".fname");
    for (var i=0; i<frozen.length; i++) {
        var src = (frozen[i])?src_frozen:src_unfrozen;
        var un_freeze = (frozen[i])?"Unfreeze":"Freeze";
        var img_html = `<img id=i${i} src='${src}' title='${un_freeze} field (${hotkey_toggle_field})' style="height:.9em" onclick='onFrozen(${i});'/>`;
        var $img = $(`#i${i}`);
        if ($img.size() == 0) {
            // Introduce image before the name
            var $td_name = $(`#name${i}`);
            $td_name.prepend(img_html);
        } else {
            // Change the current stars if they are already loaded.
            // It may be the case if callbacks delayed
            // "setFrozenFields" so much that we got the one created
            // for the previous card.  We may still need to change the
            // stars, because it's possible that we got informations
            // for a previous note type.
            $img.replaceWith(img_html);
        }
    }
}
