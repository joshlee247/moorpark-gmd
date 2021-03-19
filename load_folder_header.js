$.get('../header.html', data => $('nav').replaceWith(data.replaceAll(/"\.\//g, '"..\/')));
