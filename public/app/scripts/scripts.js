function hideAllSections() {
    jQuery('#MyProjects').hide();
    jQuery('#PresentationEditor').hide();
    jQuery('#InfographicEditor').hide();
};

jQuery().ready(function() {
    hideAllSections();
    jQuery('.MenuRadioButtons').click(function() {
        id_section = jQuery(this).attr('id').toString();
        showSection(id_section);
    });

    function hideAllEditMenuSelectedId() {
        jQuery(".editMenuItemContainer").each(function() {
            var currentElement = jQuery(this);
            if (currentElement.hasClass("selected"))
                currentElement.removeClass("selected");
        });
    }

    function SetEditMenuSelectedId(id) {
        hideAllEditMenuSelectedId();
        jQuery(this).addClass("selected");
    }
});

function menuSwitcher() {
    hideAllSections();
};

function showSection(name) {
    hideAllSections();
    if (name == "'MyProjects'")
        jQuery('#MyProjects').show();
    if (name == "'PresentationEditor'")
        jQuery('#PresentationEditor').show();
    if (name == "'InfographicEditor'")
        jQuery('#InfographicEditor').show();
};
