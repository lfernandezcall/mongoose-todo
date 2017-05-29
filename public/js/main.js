console.log('this file is loaded...')

$('a.remove').on('click', function (e) {
  e.preventDefault()
  const url = $(this).attr('href')
  const $item = $(this).closest('li')
  $.ajax({
    url,
    method: 'DELETE'
  })
  // location.reload()
  .done((msg) => {
    console.log(msg)
    $item.remove()
  })
  .fail(function (err) {
    console.log(err)
  })
})

// $('a.updateTitle').hover(
//   function () {
//     $('#addHidden').hide()
//     $('#removeHidden').show()
//   },
//   function () {
//     $('#addHidden').show()
//     $('#removeHidden').hide()
//   })

$('a.updateTitle').on('click', function (e) {
  e.preventDefault()
  const url = $(this).attr('href')
  const $item = $(this).closest('li')
  const $title = $(this).siblings('input').val()
  console.log(`You clicked the "Modify" button w/ this value "${$title}"`)

  $.ajax({
    url,
    method: 'PUT',
    data: `title=${$title}`
  })
  location.reload()
  // .done((msg) => {
  //   // console.log(msg)
  //   $item.text('This is my text')
  // })
  // .fail(function (err) {
  //   console.log(err)
  // })
})
