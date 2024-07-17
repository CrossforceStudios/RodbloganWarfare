


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

    const stories = document.querySelector('.rw-stories')
    const median = stories.offsetLeft + (stories.clientWidth / 2)
    
    const state = {
      current_story: stories.firstElementChild.lastElementChild
    }
    
    stories.addEventListener('click', e => {
      if (e.target.nodeName !== 'ARTICLE')
        return
    
      navigateStories(
        e.clientX > median
          ? 'next'
          : 'prev')
    })
    
    document.addEventListener('keydown', ({key}) => {
      if (key !== 'ArrowDown' || key !== 'ArrowUp')
        navigateStories(
          key === 'ArrowDown'
            ? 'next'
            : 'prev')
    })

        const navigateStories = direction => {
            const story = state.current_story
            const lastItemInUserStory = story.parentNode.firstElementChild
            const firstItemInUserStory = story.parentNode.lastElementChild
            const hasNextUserStory = story.parentElement.nextElementSibling
            const hasPrevUserStory = story.parentElement.previousElementSibling
          
            if (direction === 'next') {
              if (lastItemInUserStory === story && !hasNextUserStory)
                return
              else if (lastItemInUserStory === story && hasNextUserStory) {
                state.current_story = story.parentElement.nextElementSibling.lastElementChild
                story.parentElement.nextElementSibling.scrollIntoView({
                  behavior: 'smooth'
                })
              }
              else {
                story.classList.add('seen')
                state.current_story = story.previousElementSibling
              }
            }
            else if(direction === 'prev') {
              if (firstItemInUserStory === story && !hasPrevUserStory)
                return
              else if (firstItemInUserStory === story && hasPrevUserStory) {
                state.current_story = story.parentElement.previousElementSibling.firstElementChild
                story.parentElement.previousElementSibling.scrollIntoView({
                  behavior: 'smooth'
                })
              }
              else {
                story.nextElementSibling.classList.remove('seen')
                state.current_story = story.nextElementSibling
              }
            }
          }

  

  });