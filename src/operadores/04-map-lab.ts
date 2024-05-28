import { fromEvent, map } from "rxjs";

const text = document.createElement('div');
text.innerHTML = 
`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non diam a neque luctus consequat. Sed ante massa, fringilla ac eleifend non, porta ac sapien. Etiam vel cursus magna. Vivamus at quam neque. Suspendisse condimentum pharetra iaculis. Maecenas tincidunt libero ut ipsum varius tincidunt ut ac arcu. Sed condimentum fermentum vehicula. Cras sagittis velit ut nisi imperdiet consectetur.
<br/><br/>
Maecenas tempus sem nisi, sit amet varius lectus lobortis vel. Morbi ut fermentum mauris. Pellentesque accumsan felis velit, non vulputate felis faucibus non. Ut facilisis lorem nec ante rutrum blandit. Etiam maximus quis eros ac ornare. Duis efficitur egestas eros sed pulvinar. Nulla finibus est ipsum. Suspendisse congue scelerisque nibh vitae consectetur. Integer laoreet, ipsum at rutrum maximus, est odio condimentum sem, nec iaculis nunc est sed urna. Nunc porta justo vel diam feugiat scelerisque. Nam urna justo, gravida non nisi sit amet, tincidunt rutrum lacus. Duis diam nunc, commodo in blandit vitae, rhoncus nec erat.
<br/><br/>
Ut elementum molestie suscipit. Etiam vel quam pharetra, finibus urna ac, sodales leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in arcu diam. Praesent rhoncus lacus nisl, quis laoreet nisl euismod eget. Morbi fringilla pulvinar tellus, ac faucibus turpis laoreet sed. Praesent varius felis non tincidunt maximus. Cras viverra ante ut ullamcorper vehicula. Praesent aliquam tristique orci, a euismod ante mattis feugiat. Donec quis commodo eros, quis pellentesque massa. Phasellus quis libero convallis, maximus nisi vel, convallis sem. Mauris porttitor, nisi vitae facilisis ultrices, ex arcu scelerisque augue, non aliquam neque ipsum quis tortor. Duis luctus urna at mauris pretium, vitae dapibus odio imperdiet. Vestibulum tempus urna sem, ut posuere nunc blandit consectetur. Integer in eros arcu.
<br/><br/>
Ut consequat, diam eget fermentum mattis, magna ipsum maximus est, sed interdum turpis ante ut ipsum. Duis ullamcorper et erat et lobortis. Aliquam eleifend, nisl ac luctus fermentum, orci tortor sodales odio, non condimentum mauris eros at velit. Cras eget pulvinar est. Ut ligula quam, venenatis venenatis tellus vitae, ullamcorper consequat diam. Curabitur est nulla, sagittis et condimentum et, efficitur sagittis ex. Vestibulum in diam nec neque mattis maximus ac nec risus. In sit amet nunc nisi. Integer finibus tortor sit amet velit pretium, a lobortis justo mattis. Suspendisse ornare, lacus quis lacinia laoreet, ipsum dolor placerat magna, nec consequat urna risus ut quam. Duis sit amet bibendum odio. Vestibulum non leo a lectus vulputate cursus. Sed quis felis quis lacus dictum placerat. Nunc dapibus viverra suscipit.
<br/><br/>
Duis dignissim odio et risus vulputate, eu elementum nisl porttitor. Nullam sed fermentum tortor. Sed tempor dictum dolor, eget dapibus odio suscipit id. In eget odio ornare, ultricies velit ut, tristique lectus. Nulla facilisi. Sed aliquet accumsan est id blandit. Sed dolor diam, ornare in ligula sed, ultricies eleifend velit. Nulla laoreet mi lacus, quis porttitor sapien porttitor nec. Morbi vel orci velit. Suspendisse vehicula faucibus mi at efficitur. Suspendisse eget justo a ipsum tincidunt sodales. Maecenas suscipit erat et mauris gravida sodales. Nullam faucibus ullamcorper libero, eu feugiat quam vestibulum ut. Cras id faucibus arcu. Integer elementum velit quis consequat fermentum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non diam a neque luctus consequat. Sed ante massa, fringilla ac eleifend non, porta ac sapien. Etiam vel cursus magna. Vivamus at quam neque. Suspendisse condimentum pharetra iaculis. Maecenas tincidunt libero ut ipsum varius tincidunt ut ac arcu. Sed condimentum fermentum vehicula. Cras sagittis velit ut nisi imperdiet consectetur.
<br/><br/>
Maecenas tempus sem nisi, sit amet varius lectus lobortis vel. Morbi ut fermentum mauris. Pellentesque accumsan felis velit, non vulputate felis faucibus non. Ut facilisis lorem nec ante rutrum blandit. Etiam maximus quis eros ac ornare. Duis efficitur egestas eros sed pulvinar. Nulla finibus est ipsum. Suspendisse congue scelerisque nibh vitae consectetur. Integer laoreet, ipsum at rutrum maximus, est odio condimentum sem, nec iaculis nunc est sed urna. Nunc porta justo vel diam feugiat scelerisque. Nam urna justo, gravida non nisi sit amet, tincidunt rutrum lacus. Duis diam nunc, commodo in blandit vitae, rhoncus nec erat.
<br/><br/>
Ut elementum molestie suscipit. Etiam vel quam pharetra, finibus urna ac, sodales leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in arcu diam. Praesent rhoncus lacus nisl, quis laoreet nisl euismod eget. Morbi fringilla pulvinar tellus, ac faucibus turpis laoreet sed. Praesent varius felis non tincidunt maximus. Cras viverra ante ut ullamcorper vehicula. Praesent aliquam tristique orci, a euismod ante mattis feugiat. Donec quis commodo eros, quis pellentesque massa. Phasellus quis libero convallis, maximus nisi vel, convallis sem. Mauris porttitor, nisi vitae facilisis ultrices, ex arcu scelerisque augue, non aliquam neque ipsum quis tortor. Duis luctus urna at mauris pretium, vitae dapibus odio imperdiet. Vestibulum tempus urna sem, ut posuere nunc blandit consectetur. Integer in eros arcu.
<br/><br/>
Ut consequat, diam eget fermentum mattis, magna ipsum maximus est, sed interdum turpis ante ut ipsum. Duis ullamcorper et erat et lobortis. Aliquam eleifend, nisl ac luctus fermentum, orci tortor sodales odio, non condimentum mauris eros at velit. Cras eget pulvinar est. Ut ligula quam, venenatis venenatis tellus vitae, ullamcorper consequat diam. Curabitur est nulla, sagittis et condimentum et, efficitur sagittis ex. Vestibulum in diam nec neque mattis maximus ac nec risus. In sit amet nunc nisi. Integer finibus tortor sit amet velit pretium, a lobortis justo mattis. Suspendisse ornare, lacus quis lacinia laoreet, ipsum dolor placerat magna, nec consequat urna risus ut quam. Duis sit amet bibendum odio. Vestibulum non leo a lectus vulputate cursus. Sed quis felis quis lacus dictum placerat. Nunc dapibus viverra suscipit.
<br/><br/>
Duis dignissim odio et risus vulputate, eu elementum nisl porttitor. Nullam sed fermentum tortor. Sed tempor dictum dolor, eget dapibus odio suscipit id. In eget odio ornare, ultricies velit ut, tristique lectus. Nulla facilisi. Sed aliquet accumsan est id blandit. Sed dolor diam, ornare in ligula sed, ultricies eleifend velit. Nulla laoreet mi lacus, quis porttitor sapien porttitor nec. Morbi vel orci velit. Suspendisse vehicula faucibus mi at efficitur. Suspendisse eget justo a ipsum tincidunt sodales. Maecenas suscipit erat et mauris gravida sodales. Nullam faucibus ullamcorper libero, eu feugiat quam vestibulum ut. Cras id faucibus arcu. Integer elementum velit quis consequat fermentum.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');

progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

//funcion que calcule

const calcularPorcentajeScroll = (event)=>{
    const {
        scrollTop,
        scrollHeight,
        clientHeight,
    } = event.target.documentElement;
      const porcentaje = (scrollTop / (scrollHeight - clientHeight) * 100);
      console.log("porcentaje:", porcentaje)
      
    return porcentaje;
    
}

//streams

const scroll$ = fromEvent<Event>(document,'scroll');

// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    //ojito con los {} son re traicioneros
    map(event =>
  calcularPorcentajeScroll(event)
    )
);

progress$.subscribe((porcentaje) =>{
    console.log(porcentaje);
    progressBar.style.width = `${porcentaje}%`;
})