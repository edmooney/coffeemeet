<script>



    let userfriendly = "Ed";
    let previouscnt = 3;
    let possname = "Jen Smith";
    let funfact = "Fun Fact: Likes tacos and green salsa";
    
    let randomc1 = null;
    let randomc2 = null;
    let randomc3 = null;
    //fetch userdata
    let promise = fetch('http://localhost:5173/data/mockuserdata.json').then((x) => x.json());
    console.log(promise);
    
    function acceptMeet(){
        console.log('accept meet');

    }   
    
    function passMeet(){
        console.log('pass meet');
    }

</script>

<div class="prose ">
<h1>Hello {userfriendly}</h1>


{#await promise}
 
...loading...

{:then value}



{#each value as u, index}
<li>
  {index + 1}: {u.name} x {u.email}
</li>
{/each}


<div class="card w-96 bg-neutral text-neutral-content">
    <div class="card-body items-center text-center">
      <h2 class="card-title">{possname}</h2>
      <p>{funfact}<br/>Want to have coffee?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Yes</button>
        <button class="btn btn-ghost">No</button>
      </div>
    </div>
  </div>

{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}

{#if previouscnt > 0}
<h2>Previous Meets</h2>
<div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div class="font-bold">Hart Hagerty</div>
                <div class="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            Zemlak, Daniel and Leannon
            <br/>
            <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
          </td>
          <td>Purple</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <!-- row 2 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div class="font-bold">Brice Swyre</div>
                <div class="text-sm opacity-50">China</div>
              </div>
            </div>
          </td>
          <td>
            Carroll Group
            <br/>
            <span class="badge badge-ghost badge-sm">Tax Accountant</span>
          </td>
          <td>Red</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div class="font-bold">Marjy Ferencz</div>
                <div class="text-sm opacity-50">Russia</div>
              </div>
            </div>
          </td>
          <td>
            Rowe-Schoen
            <br/>
            <span class="badge badge-ghost badge-sm">Office Assistant I</span>
          </td>
          <td>Crimson</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        <!-- row 4 -->
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div class="font-bold">Yancy Tear</div>
                <div class="text-sm opacity-50">Brazil</div>
              </div>
            </div>
          </td>
          <td>
            Wyman-Ledner
            <br/>
            <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
          </td>
          <td>Indigo</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </tfoot>
      
    </table>
  </div>

  {/if}

</div>



