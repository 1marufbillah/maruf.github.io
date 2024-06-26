document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of project 1',
            link: 'https://github.com/yourusername/project1'
        },
        {
            title: 'Project 2',
            description: 'Description of project 2',
            link: 'https://github.com/yourusername/project2'
        }
        // Add more projects as needed
    ];

    const blogPosts = [
        {
            title: 'Blog Post 1',
            snippet: 'Snippet of blog post 1',
            link: 'https://yourblog.com/post1'
        },
        {
            title: 'Blog Post 2',
            snippet: 'Snippet of blog post 2',
            link: 'https://yourblog.com/post2'
        }
        // Add more blog posts as needed
    ];

    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('col-md-4', 'project-item');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsContainer.appendChild(projectDiv);
    });

    const blogContainer = document.getElementById('blog-container');
    blogPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.snippet}</p>
            <a href="${post.link}" target="_blank">Read More</a>
        `;
        blogContainer.appendChild(postDiv);
    });
});
