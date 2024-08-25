context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

//1. 基础导航 (basic nav)
  it('basic nav', () => {
    //检查当前URL：首先，通过cy.url().should('eq', 'http://localhost:9999/')检查当前URL是否为根URL。
    cy.url()
      .should('eq', 'http://localhost:9999/')

    //检查首页布局存在：通过cy.contains('[Home Layout]').should('exist')检查页面上是否存在包含文本[Home Layout]的元素，这里假设[Home Layout]是首页布局的一个标识性文本。
    cy.contains('[Home Layout]')
      .should('exist')

    //输入并检查URL变化：在ID为input的输入框中输入Vitesse并按下Enter键（通过.type('Vitesse{Enter}')），然后检查URL是否变化为http://localhost:9999/hi/Vitesse。这通常意味着应用有一个搜索或路由跳转功能。
    cy.get('#input')
      .type('Vitesse{Enter}')
      .url()
      .should('eq', 'http://localhost:9999/hi/Vitesse')

    //检查默认布局存在：输入并跳转后，检查页面上是否存在包含文本[Default Layout]的元素，这可能表示页面跳转到了一个新的布局或页面。
    cy.contains('[Default Layout]')
      .should('exist')

    //点击按钮并检查URL回归：找到并点击一个具有[btn]属性的元素（这里假设[btn]是按钮的一个自定义属性），然后检查URL是否回到了根URLhttp://localhost:9999/。
    cy.get('[btn]')
      .click()
      .url()
      .should('eq', 'http://localhost:9999/')
  })
//2. Markdown (markdown)
  it('markdown', () => {
    //点击关于页面：通过点击具有[data-test-id="about"]属性的元素（通常用于测试目的，以便更容易地定位到特定的UI元素），访问关于页面，并检查URL是否变化为http://localhost:9999/about。
    cy.get('[data-test-id="about"]')
      .click()
      .url()
      .should('eq', 'http://localhost:9999/markdown')

    //检查Markdown渲染：在关于页面上，检查是否存在类名为.shiki的元素。.shiki可能是一个用于Markdown渲染的库或CSS类的标识，表明Markdown内容被正确渲染和显示。
    cy.get('.shiki')
      .should('exist')
  })

//3.自定义跳转 检查内容
  it('readme', () => {
    cy.url()
    .visit('http://localhost:9999/readme')

    cy.contains('vue-template')
    .should('exist')
  })
})
