# daisyUI 5

daisyUI 5 is a CSS component library for Tailwind CSS 4. It provides semantic class names for common UI components, semantic color names, and themes.

## Installation

daisyUI 5 is a Tailwind CSS plugin. Install it with npm:

```bash
npm i -D daisyui@latest
```

Then import it in your CSS file (where you import Tailwind CSS):

```css
@import "tailwindcss";
@import "daisyui";
```

## Colors

daisyUI uses semantic color names. These colors adapt to the active theme automatically.

### Color names

- `primary` – Main brand color
- `primary-content` – Foreground for primary
- `secondary` – Secondary brand color
- `secondary-content` – Foreground for secondary
- `accent` – Accent color
- `accent-content` – Foreground for accent
- `neutral` – Neutral color
- `neutral-content` – Foreground for neutral
- `base-100` – Base page background
- `base-200` – Slightly darker background
- `base-300` – Even darker background
- `base-content` – Foreground for base
- `info` – Info state
- `info-content` – Foreground for info
- `success` – Success state
- `success-content` – Foreground for success
- `warning` – Warning state
- `warning-content` – Foreground for warning
- `error` – Error state
- `error-content` – Foreground for error


### Usage with Tailwind CSS utilities

Use daisyUI color names with any Tailwind CSS color utility:

- `bg-primary`, `bg-secondary`, `bg-accent`, `bg-neutral`, `bg-base-100`
- `text-primary`, `text-secondary`, `text-base-content`
- `border-primary`, `border-secondary`

## Themes

daisyUI has built-in themes. Add themes to your `<html>` tag:

```html
<html data-theme="light">
```

### Built-in themes

light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset, caramellatte, abyss, silk

### Enable specific themes in CSS

```css
@plugin "daisyui" {
  themes: light --default, dark --prefersDark, cupcake;
}
```

## Components

### accordion

Accordion shows/hides content, only one item open at a time.
[accordion docs](https://daisyui.com/components/accordion/)

#### Class names
- component: `accordion`
- child: `accordion-title`, `accordion-content`

#### Syntax
```html
<div class="accordion {MODIFIER}">
  <div class="accordion-title">{TITLE}</div>
  <div class="accordion-content">{CONTENT}</div>
</div>
```

#### Rules
- Uses radio inputs or `<details>` elements for toggle
- Use different `name` attributes for separate accordion groups


### alert

Alert informs users about important events.
[alert docs](https://daisyui.com/components/alert/)

#### Class names
- component: `alert`
- style: `alert-outline`, `alert-dash`, `alert-soft`
- color: `alert-info`, `alert-success`, `alert-warning`, `alert-error`
- direction: `alert-vertical`, `alert-horizontal`

#### Syntax
```html
<div class="alert {MODIFIER}">{CONTENT}</div>
```

### artboard

Artboard provides a fixed-size container for mockups.
[artboard docs](https://daisyui.com/components/artboard/)

#### Class names
- component: `artboard`
- size: `artboard-demo`, phone sizes `phone-1` through `phone-6`
- modifier: `artboard-horizontal`

### avatar

Avatar shows an image as a user profile picture.
[avatar docs](https://daisyui.com/components/avatar/)

#### Class names
- component: `avatar`
- group: `avatar-group`
- modifier: `online`, `offline`, `placeholder`

#### Syntax
```html
<div class="avatar">
  <div class="w-24 rounded-full">
    <img src="{URL}" />
  </div>
</div>
```

### badge

Badge informs the user of the status of specific data.
[badge docs](https://daisyui.com/components/badge/)

#### Class names
- component: `badge`
- style: `badge-outline`, `badge-dash`, `badge-soft`
- color: `badge-primary`, `badge-secondary`, `badge-accent`, `badge-neutral`, `badge-info`, `badge-success`, `badge-warning`, `badge-error`
- size: `badge-xs`, `badge-sm`, `badge-md`, `badge-lg`, `badge-xl`

#### Syntax
```html
<span class="badge {MODIFIER}">{TEXT}</span>
```


### bottom-nav

Bottom navigation bar for mobile layouts.
[bottom-nav docs](https://daisyui.com/components/bottom-nav/)

#### Class names
- component: `btm-nav`
- child: `btm-nav-label`
- size: `btm-nav-xs`, `btm-nav-sm`, `btm-nav-md`, `btm-nav-lg`
- state: `active`, `disabled`

### breadcrumbs

Breadcrumbs show the user's current path.
[breadcrumbs docs](https://daisyui.com/components/breadcrumbs/)

#### Class names
- component: `breadcrumbs`

#### Syntax
```html
<div class="breadcrumbs">
  <ul>
    <li><a>Home</a></li>
    <li><a>Documents</a></li>
    <li>Current</li>
  </ul>
</div>
```

### btn (button)

Button is used for clickable actions.
[button docs](https://daisyui.com/components/button/)

#### Class names
- component: `btn`
- style: `btn-outline`, `btn-dash`, `btn-soft`, `btn-ghost`, `btn-link`
- color: `btn-primary`, `btn-secondary`, `btn-accent`, `btn-neutral`, `btn-info`, `btn-success`, `btn-warning`, `btn-error`
- size: `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`, `btn-xl`
- shape: `btn-wide`, `btn-block`, `btn-circle`, `btn-square`
- state: `btn-active`, `btn-disabled`

#### Syntax
```html
<button class="btn {MODIFIER}">{TEXT}</button>
```

#### Rules
- Default size is `btn-md`
- `btn-block` makes button full width
- `btn-circle` and `btn-square` are for icon-only buttons


### card

Card is a container for content with a structured layout.
[card docs](https://daisyui.com/components/card/)

#### Class names
- component: `card`
- child: `card-body`, `card-title`, `card-actions`
- style: `card-dash`, `card-border`
- modifier: `card-compact`, `card-side`, `image-full`

#### Syntax
```html
<div class="card {MODIFIER}">
  <figure><img src="{URL}" alt="" /></figure>
  <div class="card-body">
    <h2 class="card-title">{TITLE}</h2>
    <p>{DESCRIPTION}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

### carousel

Carousel displays multiple items in a scrollable row.
[carousel docs](https://daisyui.com/components/carousel/)

#### Class names
- component: `carousel`
- child: `carousel-item`
- modifier: `carousel-center`, `carousel-end`, `carousel-vertical`

### chat

Chat bubble for messaging interfaces.
[chat docs](https://daisyui.com/components/chat/)

#### Class names
- component: `chat`
- direction: `chat-start`, `chat-end`
- child: `chat-image`, `chat-header`, `chat-bubble`, `chat-footer`
- color: `chat-bubble-primary`, `chat-bubble-secondary`, `chat-bubble-accent`, `chat-bubble-info`, `chat-bubble-success`, `chat-bubble-warning`, `chat-bubble-error`

### checkbox

Checkbox for boolean input.
[checkbox docs](https://daisyui.com/components/checkbox/)

#### Class names
- component: `checkbox`
- color: `checkbox-primary`, `checkbox-secondary`, `checkbox-accent`, `checkbox-info`, `checkbox-success`, `checkbox-warning`, `checkbox-error`
- size: `checkbox-xs`, `checkbox-sm`, `checkbox-md`, `checkbox-lg`, `checkbox-xl`


### collapse

Collapse shows/hides content on click.
[collapse docs](https://daisyui.com/components/collapse/)

#### Class names
- component: `collapse`
- child: `collapse-title`, `collapse-content`
- style: `collapse-arrow`, `collapse-plus`
- state: `collapse-open`, `collapse-close`

#### Syntax
```html
<div class="collapse {MODIFIER}">
  <input type="checkbox" />
  <div class="collapse-title">{TITLE}</div>
  <div class="collapse-content">{CONTENT}</div>
</div>
```

### countdown

Countdown displays a timer with animated digits.
[countdown docs](https://daisyui.com/components/countdown/)

#### Class names
- component: `countdown`

#### Syntax
```html
<span class="countdown">
  <span style="--value:15;"></span>
</span>
```

### diff

Diff component shows a before/after comparison.
[diff docs](https://daisyui.com/components/diff/)

#### Class names
- component: `diff`
- child: `diff-item-1`, `diff-item-2`, `diff-resizer`

### divider

Divider separates content with a line and optional text.
[divider docs](https://daisyui.com/components/divider/)

#### Class names
- component: `divider`
- direction: `divider-horizontal`, `divider-vertical`
- color: `divider-primary`, `divider-secondary`, `divider-accent`, `divider-neutral`, `divider-info`, `divider-success`, `divider-warning`, `divider-error`
- position: `divider-start`, `divider-end`

#### Syntax
```html
<div class="divider {MODIFIER}">{TEXT}</div>
```

### drawer

Drawer is a sidebar layout. Hidden on mobile, visible on desktop.
[drawer docs](https://daisyui.com/components/drawer/)

#### Class names
- component: `drawer`
- child: `drawer-toggle`, `drawer-content`, `drawer-side`, `drawer-overlay`
- modifier: `drawer-end`, `drawer-open`


### dropdown

Dropdown shows a list on click or hover.
[dropdown docs](https://daisyui.com/components/dropdown/)

#### Class names
- component: `dropdown`
- child: `dropdown-content`
- position: `dropdown-end`, `dropdown-top`, `dropdown-bottom`, `dropdown-left`, `dropdown-right`
- modifier: `dropdown-hover`, `dropdown-open`

#### Syntax
```html
<div class="dropdown {MODIFIER}">
  <div tabindex="0" role="button" class="btn">Click</div>
  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
```

### fieldset

Fieldset groups form elements with a title and description.
[fieldset docs](https://daisyui.com/components/fieldset/)

#### Class names
- component: `fieldset`
- child: `fieldset-legend`, `fieldset-label`

### file-input

File input for file uploads.
[file-input docs](https://daisyui.com/components/file-input/)

#### Class names
- component: `file-input`
- color: `file-input-primary`, `file-input-secondary`, `file-input-accent`, `file-input-info`, `file-input-success`, `file-input-warning`, `file-input-error`
- size: `file-input-xs`, `file-input-sm`, `file-input-md`, `file-input-lg`, `file-input-xl`

### footer

Footer for page bottom content.
[footer docs](https://daisyui.com/components/footer/)

#### Class names
- component: `footer`
- child: `footer-title`
- modifier: `footer-center`, `footer-horizontal`

### hero

Hero is a large section for introductory content.
[hero docs](https://daisyui.com/components/hero/)

#### Class names
- component: `hero`
- child: `hero-content`, `hero-overlay`

#### Syntax
```html
<div class="hero min-h-screen" style="background-image: url({URL});">
  <div class="hero-overlay"></div>
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">{TITLE}</h1>
      <p class="py-6">{TEXT}</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
```


### indicator

Indicator positions an element at a corner of another.
[indicator docs](https://daisyui.com/components/indicator/)

#### Class names
- component: `indicator`
- child: `indicator-item`
- position: `indicator-start`, `indicator-center`, `indicator-end`, `indicator-top`, `indicator-middle`, `indicator-bottom`

### input

Text input for forms.
[input docs](https://daisyui.com/components/input/)

#### Class names
- component: `input`
- color: `input-primary`, `input-secondary`, `input-accent`, `input-info`, `input-success`, `input-warning`, `input-error`
- size: `input-xs`, `input-sm`, `input-md`, `input-lg`, `input-xl`

#### Syntax
```html
<label class="input">
  <span class="label">Email</span>
  <input type="text" placeholder="mail@site.com" />
</label>
```

### join

Join groups multiple items together visually.
[join docs](https://daisyui.com/components/join/)

#### Class names
- component: `join`
- child: `join-item`
- direction: `join-vertical`, `join-horizontal`

#### Syntax
```html
<div class="join">
  <button class="btn join-item">Button 1</button>
  <button class="btn join-item">Button 2</button>
  <button class="btn join-item">Button 3</button>
</div>
```

### kbd

Keyboard key indicator.
[kbd docs](https://daisyui.com/components/kbd/)

#### Class names
- component: `kbd`
- size: `kbd-xs`, `kbd-sm`, `kbd-md`, `kbd-lg`, `kbd-xl`

### label (form control label)

Used inside `input`, `select`, `textarea` for floating or inline labels.

#### Syntax
```html
<label class="input input-bordered flex items-center gap-2">
  <span class="label">Name</span>
  <input type="text" class="grow" placeholder="Daisy" />
</label>
```


### list

List is a vertical layout to display information in rows.
[list docs](https://daisyui.com/components/list/)

#### Class names
- component: `list` (vertical flex container for list rows)
- child: `list-row` (horizontal grid row inside the list)
- modifier: `list-col-wrap` (pushes a child to the next line), `list-col-grow` (makes a child fill remaining space)

#### Syntax
```html
<ul class="list bg-base-100 rounded-box shadow-md">
  <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Header text</li>
  <li class="list-row">
    <div><img class="size-10 rounded-box" src="{URL}" /></div>
    <div>
      <div>Title</div>
      <div class="text-xs uppercase font-semibold opacity-60">Subtitle</div>
    </div>
    <button class="btn btn-square btn-ghost">...</button>
  </li>
</ul>
```

#### Rules
- By default, the second direct child of `list-row` fills remaining space
- Use `list-col-grow` on a different child to override which column grows
- Use `list-col-wrap` on a child to push it to the next line (full-width description row)
- First `<li>` without `list-row` can serve as a section header


### link

Styled anchor link.
[link docs](https://daisyui.com/components/link/)

#### Class names
- component: `link`
- color: `link-primary`, `link-secondary`, `link-accent`, `link-neutral`, `link-info`, `link-success`, `link-warning`, `link-error`
- modifier: `link-hover`

### loading

Loading spinner/indicator.
[loading docs](https://daisyui.com/components/loading/)

#### Class names
- component: `loading`
- style: `loading-spinner`, `loading-dots`, `loading-ring`, `loading-ball`, `loading-bars`, `loading-infinity`
- size: `loading-xs`, `loading-sm`, `loading-md`, `loading-lg`, `loading-xl`

### mask

Mask applies a shape to an image.
[mask docs](https://daisyui.com/components/mask/)

#### Class names
- component: `mask`
- shape: `mask-squircle`, `mask-heart`, `mask-hexagon`, `mask-hexagon-2`, `mask-decagon`, `mask-pentagon`, `mask-diamond`, `mask-square`, `mask-circle`, `mask-star`, `mask-star-2`, `mask-triangle`, `mask-triangle-2`, `mask-triangle-3`, `mask-triangle-4`, `mask-half-1`, `mask-half-2`

### menu

Menu displays a vertical or horizontal list of links/actions.
[menu docs](https://daisyui.com/components/menu/)

#### Class names
- component: `menu`
- child: `menu-title`
- direction: `menu-horizontal`, `menu-vertical`
- size: `menu-xs`, `menu-sm`, `menu-md`, `menu-lg`, `menu-xl`
- state on `<li>`: `disabled`, `active`

#### Syntax
```html
<ul class="menu bg-base-200 rounded-box w-56">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
```

### megamenu

Megamenu is a large horizontal menu where each item opens a popover with navigation links. Use once at the top of the page. Uses the Popover API for toggling panels.
[megamenu docs](https://daisyui.com/components/megamenu/)

#### Class names
- component: `megamenu`
- child: `megamenu-active` (visual indicator that moves to the active item)
- modifier: `megamenu-wide` (popover as wide as the megamenu container), `megamenu-full` (popover fills full page width), `megamenu-vertical` (vertical layout for small screens)
- size: `megamenu-xs`, `megamenu-sm`, `megamenu-md`, `megamenu-lg`, `megamenu-xl`

#### Syntax
```html
<!-- Button to open megamenu on small screens -->
<button class="btn sm:hidden" popovertarget="my-megamenu">Menu</button>

<div class="megamenu max-sm:megamenu-vertical" id="my-megamenu" popover>
  <span class="megamenu-active"></span>

  <button popovertarget="section1">Section 1</button>
  <div id="section1" popover>
    <ul class="menu">
      <li><a>Link 1</a></li>
      <li><a>Link 2</a></li>
    </ul>
  </div>

  <button popovertarget="section2">Section 2</button>
  <div id="section2" popover>
    <ul class="menu">
      <li><a>Link 3</a></li>
      <li><a>Link 4</a></li>
    </ul>
  </div>
</div>
```

#### Megamenu in a navbar
```html
<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl">Brand</a>
  </div>
  <div class="navbar-center">
    <div class="megamenu max-sm:megamenu-vertical megamenu-full" id="my-megamenu" popover>
      <span class="megamenu-active"></span>
      <button popovertarget="nav1">Products</button>
      <div id="nav1" popover>
        <ul class="menu w-full md:menu-horizontal">
          <li><a>Category</a>
            <ul>
              <li><a>Sub item</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="navbar-end">
    <a class="btn">Login</a>
    <button class="btn sm:hidden" popovertarget="my-megamenu">Menu</button>
  </div>
</div>
```

#### Rules
- Each `<button popovertarget="ID">` must have a matching `<div id="ID" popover>` with the same unique ID
- Use `max-sm:megamenu-vertical` to make it vertical on small screens; hide it by default and toggle via a button with `popovertarget`
- Place the toggle button (for small screens) outside the megamenu with `sm:hidden`
- Maximum 10 popovers per megamenu
- HTML IDs must be unique across the page
- Use `megamenu-wide` when popovers should span the megamenu width
- Use `megamenu-full` when popovers should span the full page width (good for navbar usage)
- Add `after:content-none` to buttons to remove dropdown arrows
- Popover content can contain `menu`, `menu menu-horizontal`, images, or any custom layout


### modal

Modal is a dialog box/popup.
[modal docs](https://daisyui.com/components/modal/)

#### Class names
- component: `modal`
- child: `modal-box`, `modal-action`, `modal-backdrop`
- position: `modal-top`, `modal-bottom`, `modal-middle`
- state: `modal-open`

#### Syntax
```html
<button class="btn" onclick="my_modal.showModal()">Open</button>
<dialog id="my_modal" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Title</h3>
    <p class="py-4">Content</p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
```


### navbar

Navbar is a horizontal navigation bar at the top.
[navbar docs](https://daisyui.com/components/navbar/)

#### Class names
- component: `navbar`
- child: `navbar-start`, `navbar-center`, `navbar-end`

#### Syntax
```html
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Button</a>
  </div>
</div>
```

### pagination

Pagination for navigating pages.
[pagination docs](https://daisyui.com/components/pagination/)

#### Class names
- Use `join` with `btn` elements for pagination.

#### Syntax
```html
<div class="join">
  <button class="join-item btn">1</button>
  <button class="join-item btn btn-active">2</button>
  <button class="join-item btn">3</button>
</div>
```

### progress

Progress bar shows completion status.
[progress docs](https://daisyui.com/components/progress/)

#### Class names
- component: `progress`
- color: `progress-primary`, `progress-secondary`, `progress-accent`, `progress-info`, `progress-success`, `progress-warning`, `progress-error`

#### Syntax
```html
<progress class="progress progress-primary w-56" value="70" max="100"></progress>
```

### radial-progress

Circular progress indicator.
[radial-progress docs](https://daisyui.com/components/radial-progress/)

#### Class names
- component: `radial-progress`

#### Syntax
```html
<div class="radial-progress" style="--value:70;">70%</div>
```


### radio

Radio button input.
[radio docs](https://daisyui.com/components/radio/)

#### Class names
- component: `radio`
- color: `radio-primary`, `radio-secondary`, `radio-accent`, `radio-info`, `radio-success`, `radio-warning`, `radio-error`
- size: `radio-xs`, `radio-sm`, `radio-md`, `radio-lg`, `radio-xl`

### range

Range slider input.
[range docs](https://daisyui.com/components/range/)

#### Class names
- component: `range`
- color: `range-primary`, `range-secondary`, `range-accent`, `range-info`, `range-success`, `range-warning`, `range-error`
- size: `range-xs`, `range-sm`, `range-md`, `range-lg`, `range-xl`

### rating

Rating shows stars for scoring.
[rating docs](https://daisyui.com/components/rating/)

#### Class names
- component: `rating`
- size: `rating-xs`, `rating-sm`, `rating-md`, `rating-lg`, `rating-xl`
- modifier: `rating-half`, `rating-hidden`

#### Syntax
```html
<div class="rating">
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" checked="checked" />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
</div>
```

### select

Select dropdown input.
[select docs](https://daisyui.com/components/select/)

#### Class names
- component: `select`
- color: `select-primary`, `select-secondary`, `select-accent`, `select-info`, `select-success`, `select-warning`, `select-error`
- size: `select-xs`, `select-sm`, `select-md`, `select-lg`, `select-xl`

#### Syntax
```html
<select class="select {MODIFIER}">
  <option disabled selected>Pick one</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### skeleton

Skeleton is a loading placeholder for content.
[skeleton docs](https://daisyui.com/components/skeleton/)

#### Class names
- component: `skeleton`

#### Syntax
```html
<div class="skeleton h-32 w-full"></div>
```


### stack

Stack visually stacks elements on top of each other.
[stack docs](https://daisyui.com/components/stack/)

#### Class names
- component: `stack`

### stat

Stat shows a statistic with title, value, and description.
[stat docs](https://daisyui.com/components/stat/)

#### Class names
- component: `stats`
- child: `stat`, `stat-title`, `stat-value`, `stat-desc`, `stat-figure`, `stat-actions`
- direction: `stats-horizontal`, `stats-vertical`

#### Syntax
```html
<div class="stats shadow">
  <div class="stat">
    <div class="stat-title">Total Page Views</div>
    <div class="stat-value">89,400</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
</div>
```

### steps

Steps show a sequence of progress stages.
[steps docs](https://daisyui.com/components/steps/)

#### Class names
- component: `steps`
- child: `step`
- color on step: `step-primary`, `step-secondary`, `step-accent`, `step-info`, `step-success`, `step-warning`, `step-error`
- direction: `steps-horizontal`, `steps-vertical`

#### Syntax
```html
<ul class="steps">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive</li>
</ul>
```

### swap

Swap toggles between two elements.
[swap docs](https://daisyui.com/components/swap/)

#### Class names
- component: `swap`
- child: `swap-on`, `swap-off`
- animation: `swap-rotate`, `swap-flip`
- state: `swap-active`

### tab / tabs

Tabs for switching between content panels.
[tabs docs](https://daisyui.com/components/tab/)

#### Class names
- component: `tabs`
- child: `tab`, `tab-content`
- style: `tabs-border`, `tabs-box`, `tabs-lift`
- size: `tabs-xs`, `tabs-sm`, `tabs-md`, `tabs-lg`, `tabs-xl`
- state on tab: `tab-active`, `tab-disabled`

#### Syntax
```html
<div class="tabs tabs-border">
  <input type="radio" name="my_tabs" class="tab" aria-label="Tab 1" checked="checked" />
  <div class="tab-content p-10">Tab content 1</div>
  <input type="radio" name="my_tabs" class="tab" aria-label="Tab 2" />
  <div class="tab-content p-10">Tab content 2</div>
</div>
```


### table

Table for displaying tabular data.
[table docs](https://daisyui.com/components/table/)

#### Class names
- component: `table`
- modifier: `table-zebra`, `table-pin-rows`, `table-pin-cols`
- size: `table-xs`, `table-sm`, `table-md`, `table-lg`, `table-xl`

#### Syntax
```html
<div class="overflow-x-auto">
  <table class="table">
    <thead>
      <tr><th></th><th>Name</th><th>Job</th></tr>
    </thead>
    <tbody>
      <tr><th>1</th><td>Alice</td><td>Engineer</td></tr>
      <tr><th>2</th><td>Bob</td><td>Designer</td></tr>
    </tbody>
  </table>
</div>
```

### textarea

Multi-line text input.
[textarea docs](https://daisyui.com/components/textarea/)

#### Class names
- component: `textarea`
- color: `textarea-primary`, `textarea-secondary`, `textarea-accent`, `textarea-info`, `textarea-success`, `textarea-warning`, `textarea-error`
- size: `textarea-xs`, `textarea-sm`, `textarea-md`, `textarea-lg`, `textarea-xl`

### timeline

Timeline displays events in chronological order.
[timeline docs](https://daisyui.com/components/timeline/)

#### Class names
- component: `timeline`
- child: `timeline-start`, `timeline-middle`, `timeline-end`
- direction: `timeline-horizontal`, `timeline-vertical`
- modifier: `timeline-compact`

### toast

Toast shows alert messages at screen corners.
[toast docs](https://daisyui.com/components/toast/)

#### Class names
- component: `toast`
- position: `toast-start`, `toast-center`, `toast-end`, `toast-top`, `toast-middle`, `toast-bottom`

#### Syntax
```html
<div class="toast toast-end">
  <div class="alert alert-info">
    <span>New message arrived.</span>
  </div>
</div>
```

### toggle

Toggle is a checkbox styled as a switch.
[toggle docs](https://daisyui.com/components/toggle/)

#### Class names
- component: `toggle`
- color: `toggle-primary`, `toggle-secondary`, `toggle-accent`, `toggle-info`, `toggle-success`, `toggle-warning`, `toggle-error`
- size: `toggle-xs`, `toggle-sm`, `toggle-md`, `toggle-lg`, `toggle-xl`


### tooltip

Tooltip shows extra info on hover.
[tooltip docs](https://daisyui.com/components/tooltip/)

#### Class names
- component: `tooltip`
- position: `tooltip-top`, `tooltip-bottom`, `tooltip-left`, `tooltip-right`
- color: `tooltip-primary`, `tooltip-secondary`, `tooltip-accent`, `tooltip-info`, `tooltip-success`, `tooltip-warning`, `tooltip-error`
- modifier: `tooltip-open`

#### Syntax
```html
<div class="tooltip" data-tip="hello">
  <button class="btn">Hover me</button>
</div>
```

### aura

Aura is a border light effect wrapping any component for eye-catching highlights.
[aura docs](https://daisyui.com/components/aura/)

#### Class names
- component: `aura`
- style: `aura-dual`, `aura-rainbow`, `aura-holo`, `aura-gold`, `aura-silver`, `aura-glow`
- size: `aura-xs`, `aura-sm`, `aura-md`, `aura-lg`, `aura-xl`

#### Syntax
```html
<div class="aura {MODIFIER}">
  {CONTENT}
</div>
```

#### Rules
- {MODIFIER} is optional and can have one of each style/size class names
- Set custom colors with `text-*` color classes (e.g. `text-primary`)
- Set custom background with `bg-*` color classes

### dock

Dock is a fixed bottom navigation bar (mobile-style).
[dock docs](https://daisyui.com/components/dock/)

#### Class names
- component: `dock`
- child: `dock-label`
- size: `dock-xs`, `dock-sm`, `dock-md`, `dock-lg`, `dock-xl`

#### Syntax
```html
<div class="dock">
  <button class="dock-active">
    <svg>...</svg>
    <span class="dock-label">Home</span>
  </button>
  <button>
    <svg>...</svg>
    <span class="dock-label">Search</span>
  </button>
</div>
```

## Layout and Typography

[Layout and Typography docs](https://daisyui.com/docs/layout-and-typography/)

### Layout

Layout, sizing, grids, spacing, and box alignment are handled entirely by Tailwind CSS utility classes. daisyUI does not provide its own layout utilities — use Tailwind directly:

- **Layout**: `container`, `block`, `flex`, `grid`, `hidden`, `overflow-*`
- **Sizing**: `w-*`, `h-*`, `min-w-*`, `max-w-*`, `min-h-*`, `max-h-*`
- **Flexbox**: `flex`, `flex-row`, `flex-col`, `items-*`, `justify-*`, `gap-*`
- **Grid**: `grid`, `grid-cols-*`, `grid-rows-*`, `col-span-*`
- **Spacing**: `p-*`, `m-*`, `px-*`, `py-*`, `mx-*`, `my-*`, `space-x-*`, `space-y-*`

### Typography (Tailwind Typography plugin)

The `@tailwindcss/typography` plugin provides `prose` classes for styling long-form HTML content (articles, blog posts, markdown-rendered pages). It is fully compatible with daisyUI themes.

#### Usage
```html
<article class="prose">
  <h1>Page Title</h1>
  <p>Paragraph text with <strong>bold</strong> and <em>italic</em> formatting.</p>
  <blockquote>A blockquote stands out visually.</blockquote>
  <ul>
    <li>List item one</li>
    <li>List item two</li>
  </ul>
  <pre><code>console.log('Hello');</code></pre>
</article>
```

#### Size modifiers
- `prose-sm` – smaller text
- `prose` – default size
- `prose-lg` – larger text
- `prose-xl` – extra large text
- `prose-2xl` – double extra large text

#### Constraining width
```html
<article class="prose max-w-none">...</article> <!-- full width, no max-width constraint -->
```

#### Using daisyUI colors in prose content
Apply daisyUI color utilities to text within prose:
- `text-primary`, `text-secondary`, `text-accent`
- `text-info`, `text-success`, `text-warning`, `text-error`

#### Rules
- Use `prose` on a wrapper element (`<article>`, `<div>`, etc.) to style all descendant HTML tags (headings, paragraphs, lists, tables, code, blockquotes)
- daisyUI themes automatically adjust typography colors for readability
- Combine with Tailwind size utilities: `prose lg:prose-lg`
- Tables inside `prose` are styled automatically — no need for the daisyUI `table` class
- For inline code use backticks in markdown or `<code>` tags; for blocks use `<pre><code>`

## General Rules

1. Always use daisyUI semantic class names (e.g. `btn`, `card`, `alert`) instead of rebuilding UI with raw Tailwind utilities
2. Use daisyUI semantic colors (`primary`, `secondary`, etc.) instead of hardcoded color values for theme compatibility
3. Combine daisyUI component classes with Tailwind utilities for layout (flex, grid, spacing, etc.)
4. daisyUI 5 requires Tailwind CSS 4
5. Always check available modifiers for size, color, and style variants before creating custom styles
6. For responsive designs, use Tailwind breakpoint prefixes with daisyUI classes: `lg:btn-lg`
7. Use `data-theme` attribute on any element to scope a theme to that section
