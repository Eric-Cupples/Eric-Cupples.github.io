
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: "/assets/Next Generation Fleet Replacment at ERAU.pdf",
            title: 'Anayltical Report Project - Next Generation Fleet Replacment at ERAU',
        },
        {
            url: 'https://myerauedu-my.sharepoint.com/:v:/g/personal/cupplese_my_erau_edu/EUJRujxqMrFFo6FHIE0T1jcBOLpcbgB8zpjsQho4Zs6FLg?e=FG0Av2',
            title: 'MATLAB Final Project Report - Orbital Launch Calculator',
        },
        {
            url: 'https://www.google.com',
            title: 'Build Report - Airfoil Build and Research',
        },
        {
            url: 'https://www.google.com',
            title: 'Build Report - ARCTOS Robot Arm',
        },
        {
            url: 'https://www.nagekar.com/2018/07/eli5-how-https-works.html',
            title: 'Design-Build-Fly 2023 ERAU Team Report',
        },
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;
        
        if(post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="Reports-Link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://eric-cupples.github.io/projects.html');">

        <div class="blog-link">

            <h3><a href="#projects">See More Reports</a></h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}