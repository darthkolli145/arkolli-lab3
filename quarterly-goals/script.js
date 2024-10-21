document.addEventListener('DOMContentLoaded', function() {
    const editIcon = document.querySelector('.edit-icon');
    const addGoal = document.querySelector('.add-goal');
    const quarterlyGoals = document.querySelector('.quarterly-goals');
    const addGoalDiv = document.querySelector('.add-goal');

    editIcon.addEventListener('click', function() {
        const goalDescription = prompt('Enter a new quarter goal:');
        if (goalDescription === null) return;

        const goalHashtag = prompt('Enter a goal hashtag:');
        if (goalHashtag === null) return;

        const goalCompletionStatus = prompt('Enter goal-completion status:');
        if (goalCompletionStatus === null) return;

        const newGoal = document.createElement('div');
        newGoal.classList.add('goal');

        const goalContent = document.createElement('div');
        goalContent.classList.add('goal-content');

        const checkbox = document.createElement('img');
        checkbox.src = '/quarterly-goals/Rectangle.svg';
        checkbox.alt = 'Checkbox';
        checkbox.classList.add('checkbox');

        const textContainer = document.createElement('div');

        const p = document.createElement('p');
        p.textContent = goalDescription;

        const span = document.createElement('span');
        span.classList.add('tag');
        span.textContent = `#${goalHashtag}`;
        span.style.color = '#9b72ee';

        textContainer.appendChild(p);
        textContainer.appendChild(span);

        goalContent.appendChild(checkbox);
        goalContent.appendChild(textContainer);

        const progress = document.createElement('div');
        progress.classList.add('progress');
        progress.textContent = goalCompletionStatus;

        newGoal.appendChild(goalContent);
        newGoal.appendChild(progress);

        const hr = document.createElement('hr');

        quarterlyGoals.insertBefore(newGoal, addGoalDiv);
        quarterlyGoals.insertBefore(hr, addGoalDiv);
    });

    addGoal.addEventListener('click', function() {
        const newGoal = document.createElement('div');
        newGoal.classList.add('goal');

        const goalContent = document.createElement('div');
        goalContent.classList.add('goal-content');

        const checkbox = document.createElement('img');
        checkbox.src = '/quarterly-goals/Rectangle.svg';
        checkbox.alt = 'Checkbox';
        checkbox.classList.add('checkbox');

        const textContainer = document.createElement('div');

        const p = document.createElement('p');
        p.textContent = 'New hard-coded goal';

        const span = document.createElement('span');
        span.classList.add('tag');
        span.textContent = '#new-goal';
        span.style.color = '#9b72ee';

        textContainer.appendChild(p);
        textContainer.appendChild(span);

        goalContent.appendChild(checkbox);
        goalContent.appendChild(textContainer);

        const progress = document.createElement('div');
        progress.classList.add('progress');
        progress.textContent = '0 / 1';

        newGoal.appendChild(goalContent);
        newGoal.appendChild(progress);

        const hr = document.createElement('hr');

        quarterlyGoals.insertBefore(newGoal, addGoalDiv);
        quarterlyGoals.insertBefore(hr, addGoalDiv);
    });
});