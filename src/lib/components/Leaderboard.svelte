<script lang="ts">
	export let data: any;
</script>

<div class="overflow-x-auto">
	<table class="table">
		<!-- head -->
		<thead class="text-lg">
			<tr>
				<th class="dark:text-gray-300">Avatar</th>
				<th class="dark:text-gray-300">Name</th>
				<th class="dark:text-gray-300">Rank</th>
				<th class="dark:text-gray-300">AI's Caught</th>
				<th class="dark:text-gray-300">Games Played</th>
				<th class="dark:text-gray-300">Win Rate</th>
				<th class="dark:text-gray-300">Streak</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<!-- row 1 -->
			<tr class="dark:bg-gray-800">
				<td>
					<div class="flex items-center gap-3">
						<div class="avatar">
							<div class="mask mask-squircle h-12 w-12">
								<img
									src="https://img.daisyui.com/images/profile/demo/2@94.webp"
									alt="Avatar Tailwind CSS Component"
								/>
							</div>
						</div>
					</div>
				</td>
				<td>
					<div class="font-bold dark:text-gray-100">Hart Hagerty</div>
					<div class="text-sm opacity-50 dark:text-gray-400">United States</div>
				</td>
				<td>
					<span class="badge badge-ghost badge-sm dark:badge-outline dark:text-white">Platinum</span
					>
				</td>
				<td class="dark:text-gray-300">15</td>
				<td class="dark:text-gray-300">30</td>
				<td class="dark:text-gray-300">50%</td>
				<td class="dark:text-gray-300">3</td>
				<td>
					<button class="btn btn-ghost btn-xs dark:text-gray-300">Add Friend ➕</button>
				</td>
			</tr>
			<!-- row 2 -->
			<tr class="dark:bg-gray-800">
				<td>
					<div class="flex items-center gap-3">
						<div class="avatar">
							<div class="mask mask-squircle h-12 w-12">
								<img
									src="https://img.daisyui.com/images/profile/demo/3@94.webp"
									alt="Avatar Tailwind CSS Component"
								/>
							</div>
						</div>
					</div>
				</td>
				<td>
					<div class="font-bold dark:text-gray-100">Brice Swyre</div>
					<div class="text-sm opacity-50 dark:text-gray-400">China</div>
				</td>
				<td>
					<span class="badge badge-ghost badge-sm dark:badge-outline dark:text-white">Gold</span>
				</td>
				<td class="dark:text-gray-300">10</td>
				<td class="dark:text-gray-300">25</td>
				<td class="dark:text-gray-300">40%</td>
				<td class="dark:text-gray-300">2</td>
				<td>
					<button class="btn btn-ghost btn-xs dark:text-gray-300">Add Friend ➕</button>
				</td>
			</tr>
			<!-- row 3 -->
			<tr class="dark:bg-gray-800">
				<td>
					<div class="flex items-center gap-3">
						<div class="avatar">
							<div class="mask mask-squircle h-12 w-12">
								<img
									src="https://img.daisyui.com/images/profile/demo/4@94.webp"
									alt="Avatar Tailwind CSS Component"
								/>
							</div>
						</div>
					</div>
				</td>
				<td>
					<div class="font-bold dark:text-gray-100">Marjy Ferencz</div>
					<div class="text-sm opacity-50 dark:text-gray-400">Russia</div>
				</td>
				<td>
					<span class="badge badge-ghost badge-sm dark:badge-outline dark:text-white">Silver</span>
				</td>
				<td class="dark:text-gray-300">8</td>
				<td class="dark:text-gray-300">20</td>
				<td class="dark:text-gray-300">35%</td>
				<td class="dark:text-gray-300">1</td>
				<td>
					<button class="btn btn-ghost btn-xs dark:text-gray-300">Add Friend ➕</button>
				</td>
			</tr>
			<!-- row 4 -->
			<tr class="dark:bg-gray-800">
				<td>
					<div class="flex items-center gap-3">
						<div class="avatar">
							<div class="mask mask-squircle h-12 w-12">
								<img
									src="https://img.daisyui.com/images/profile/demo/5@94.webp"
									alt="Avatar Tailwind CSS Component"
								/>
							</div>
						</div>
					</div>
				</td>
				<td>
					<div class="font-bold dark:text-gray-100">Yancy Tear</div>
					<div class="text-sm opacity-50 dark:text-gray-400">Brazil</div>
				</td>
				<td>
					<span class="badge badge-ghost badge-sm dark:badge-outline dark:text-white">Bronze</span>
				</td>
				<td class="dark:text-gray-300">5</td>
				<td class="dark:text-gray-300">15</td>
				<td class="dark:text-gray-300">33%</td>
				<td class="dark:text-gray-300">0</td>
				<td>
					<button class="btn btn-ghost btn-xs dark:text-gray-300">Add Friend ➕</button>
				</td>
			</tr>
		</tbody>
		<!-- foot -->
		<tfoot class="text-lg">
			<tr>
				<th class="dark:text-gray-300">Avatar</th>
				<th class="dark:text-gray-300">Name</th>
				<th class="dark:text-gray-300">Rank</th>
				<th class="dark:text-gray-300">AI's Caught</th>
				<th class="dark:text-gray-300">Games Played</th>
				<th class="dark:text-gray-300">Win Rate</th>
				<th class="dark:text-gray-300">Streak</th>
				<th></th>
			</tr>
		</tfoot>
	</table>
</div>
