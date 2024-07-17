


$(function(){
    $('.has-sub').on('click', function(e) { // Get all dropdown menu toggles
        $('.dropdown-menu').not($(this).children('.dropdown-menu')).removeClass('dropdown-shown'); // Hide all other dropdown menus
        $('.has-sub').not($(this)).removeClass('active'); // Remove the active selector from the other dropdown toggles
        $(this).children('.dropdown-menu').toggleClass('dropdown-shown'); // Show/hide the dropdown menu associated with the toggle being clicked
        $(this).toggleClass('active'); // Toggle the active selector on the nav-item
    });
    $('.rw-nav-menu-btn').on('click', function(e) { // Get all dropdown menu toggles
        $("#" + $(this).data("navid")).toggleClass('active'); // Hide all other dropdown menus
        $(this).toggleClass('active'); // Hide all other dropdown menus
    });

    const stories = $(".rw-stories");
    const median = stories.offset().left + (stories.width() /2);
    const state = {
        current_story: stories.first().last()
    };

    let navigateStories = (direction) => {
            const story = state.current_story;
            const lastItemInUserStory = story.parent().first();
            const firstItemInUserStory = story.parent().last();
            const hasNextUserStory = story.parent().next();
            const hasPrevUserStory = story.parent().prev();
            if (direction === 'next') {
                if (lastItemInUserStory === story && !hasNextUserStory)
                  return
                else if (lastItemInUserStory === story && hasNextUserStory) {
                  state.current_story = story.parent().next().last();
                  story.parent().next()[0].scrollIntoView({
                    behavior: 'smooth'
                  })
                }
                else {
                  story.addClass('seen');
                  state.current_story = story.prev();
                }
              }
              else if(direction === 'prev') {
                if (firstItemInUserStory === story && !hasPrevUserStory)
                  return
                else if (firstItemInUserStory === story && hasPrevUserStory) {
                  state.current_story = story.parent().prev().first();
                  story.parent().prev()[0].scrollIntoView({
                    behavior: 'smooth'
                  })
                }
                else {
                  story.next().removeClass('seen')
                  state.current_story = story.next();
                }
              }
    }

  

    stories.click(function(e){
        if(e.target.nodeName !== "ARTICLE")
            return;

        navigateStories(e.clientX > median ? "next" : "prev")
    });

    stories.keydown(function(e){
        if (key !== 'ArrowDown' || key !== 'ArrowUp')
            navigateStories( key === 'ArrowDown'  ? 'next': 'prev')

    });

  });