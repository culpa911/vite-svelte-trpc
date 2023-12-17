<script defer src="https://unpkg.com/alpinejs@latest/dist/cdn.min.js"></script>

<div class="space-y-2">
  <ul class="flex gap-2">
    <li>
      <a
        class="underline"
        href="#details"
      >
        Details
      </a>
    </li>

    <li>
      <a
        class="underline"
        href="#specs"
      >
        Specs
      </a>
    </li>

    <li>
      <a
        class="underline"
        href="#reviews"
      >
        Reviews
      </a>
    </li>
  </ul>

  <div>
    <div x-cloak x-show="activeTab === 'details'">Details</div>
    <div x-cloak x-show="activeTab === 'specs'">Specs</div>
    <div x-cloak x-show="activeTab === 'reviews'">Reviews</div>
  </div>
</div>