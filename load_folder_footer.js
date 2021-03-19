$.get('../footer.html', data => $('footer').replaceWith(data.replaceAll(/"\.\//g, '"..\/')));
