# Angular?

- Angular is a framework that allows to create SPA.
  -> Only index.html which is served.

# Components

- Key feature in Angular.
- The whole app is built by composing from a couple of components.
- App (root) component holds our entire app, will later nest other components.
- Each component has its own template, styling, business logic.
  -> Great benefit: Split up the complex app into reusable parts.

# AppModule

- It is a bundle of functionalities of our app and it basically gives Angular information which features does my app have and use.

# Data Binding

- Communication

- String Interpolation
- Property Binding
- Event Binding

-> 2 way binding (combination) Ex: [(ngModel)]="data"

# Property Binding vs String Interpolation

- If we want to ouput something in the template such as print some text to it, use string interpolation.

- If we want to change some property such as HTML element, use property binding.

# Directives

- The instructions in the DOM.

- \*ng -> Structural directives: Change structure of the DOM by adding or changing it.

- Attribute directives: Look like a normal HTML attribute (possibly with databinding or event binding), only affect/change the element they are added to.

# Services & Dependency Injection

- Services allow us to manage data, handle logic in a central place.

# Observables

- Can be known as a data source.
- Is an object we import from a third party package such as RxJS.
  -> Are constructs to which you subscribe to be informed about changes in data.

- Observer (subscribe,...) gets executed to handle data, error, completion.
