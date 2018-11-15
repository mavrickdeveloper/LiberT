<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DogecoinTransaction extends Model
{
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * Get address
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function address()
    {
        return $this->belongsTo('App\Models\DogecoinAddress', 'address_id', 'id');
    }
}
