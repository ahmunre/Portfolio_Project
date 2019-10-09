        function selectBio()
        {
            selectTab("Bio");
        }
        function selectContacts()
        {
            selectTab("Contacts");
        }
        function selectProjects()
        {
            selectTab("Projects");
        }
        function selectTab(name)
        {
            var i;
            // Get the navbar and the tabcontainer
            var navbar = document.getElementById("nav_bar");
            var tabArea = document.getElementById("content_area");
            // Remove the 'Selected' class from all children of the navbar and the tabs
            // read: clear all tabs and buttons
            var buttons = navbar.children;
            for(i = 0; i < buttons.length; i++)
            {
                var button = buttons[i];
                button.classList.remove("Selected");
            }
            var tabs = tabArea.children;
            for(i = 0; i < tabs.length; i++)
            {
                var tab = tabs[i];
                tab.classList.remove("Selected");
            }
            // Get the tab and button to select
            var selectedButton = document.getElementsByClassName(name + "TabButton")[0];
            var selectedTabBody = document.getElementsByClassName(name + "TabBody")[0];
            // Add the 'Selected' class to the tab and the button
            selectedButton.classList.add("Selected");
            selectedTabBody.classList.add("Selected");
            // Done.
        }