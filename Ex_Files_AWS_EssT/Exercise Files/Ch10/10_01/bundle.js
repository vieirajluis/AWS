(({document, fetch}) => {
  /**
   * Adds a css class to a DOM Element
   * @param {DOM Element} Element
   * @param {string} className
   * @return {DOM Element}
   */
  function addClass(Element, className) {
    const current = Element.className.split(' ')
    if (current.indexOf(className) < -1) {
      return Element
    }

    current.push(className)
    Element.className = current.join(' ')
    return Element
  }

  /**
   * Removes a css class from a DOM Element
   * @param  {DOM Element} Element
   * @param  {string} className
   * @return {DOM Element}
   */
  function removeClass(Element, className) {
    const current = Element.className.split(' ')
    if (current.indexOf(className) === -1) {
      return Element
    }

    current.splice(current.indexOf(className), 1)
    Element.className = current.join(' ')
  }

  /**
   * Binds an element with utility functions
   * @param  {DOM Element} Element
   * @return {DOM Element}
   */
  function $(Element) {
    Element.addClass = addClass.bind(null, Element)
    Element.removeClass = removeClass.bind(null, Element)
    return Element
  }

  /**
   * Updates DOM list
   * @param  {Collection} items
   * @return {Collection}
   */
  function renderItems(items) {
    while(Items.hasChildNodes()) {
      Items.removeChild(Items.lastChild)
    }

    items.map( item => {
      const el = document.createElement('div')
      el.innerHTML = item.thingid
      Items.appendChild(el)
    })

    return items
  }

  /**
   * Renders error message to DOM
   * @param  {string} err
   */
  function renderError(err) {
    TheError.style.display = 'block'
    TheError.innerHTML = err
  }

  /**
   * Hides error message
   */
  function hideError() {
    TheError.style.display = 'none'
    TheError.innerHTML = ''
  }

  /**
   * Gets URL for async requests
   * @param  {DOM Form} form
   * @return {string}
   */
  function getUrl(form) {
    return form.action + '?TableName=' + form.TableName.value
  }

  /**
   * Makes request for Items
   * @return {Promise}
   */
  function loadItems() {
    const url = getUrl(Form)
    Button.addClass('is-loading')

    return fetch(url)
      .then( response => response.json() )
      .then( response => response.Items )
      .then( renderItems )
      .catch( renderError )
      .then( () => {
        Button.removeClass('is-loading')
      })
  }

  /**
   * Adds an item to the list
   * @param {string} table
   * @param {string} item
   * @return {Promise}
   */
  function addItem(table, item) {
    const payload = {
      TableName: table,
      Item: {
        thingid: item
      }
    }

    return fetch(getUrl(Form), {
      method: 'POST',
      body: JSON.stringify(payload)
    })
  }

  // Bind to DOM elements
  const Form = $(document.getElementById('form'))
  const Button = $(document.getElementById('button'))
  const TheError = $(document.getElementById('error'))
  const Items = $(document.getElementById('items'))

  // Bind to form `onsubmit`
  Form.addEventListener('submit', (e) => {
    // Prevent default execution
    e.preventDefault()

    Button.addClass('is-loading')

    addItem(Form.TableName.value, Form.thingid.value)
      // Success!
      .then( () => {
        // Reload items in the list
        loadItems()
          .then( () => {
            Button.removeClass('is-loading')
          })
          // Ready UI for next submission
          .then( () => {
            Form.thingid.value = ''
            Form.thingid.focus()
          })
      })
      .catch( renderError )

    // Returning false to prevent form from submitting
    return false
  })

  // Initial data populate
  loadItems()
})({document, fetch})