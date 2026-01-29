import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    if (body.formType === 'player_registration') {
      const { error } = await supabase
        .from('players')
        .insert([{
          full_name: body.fullName,
          dob: body.dob,
          height: body.height,
          position: body.position,
          story: body.story,
          mentorship_interested: body.mentorship_interested || false,
          gear_support_needed: body.gear_support_needed || false,
        }]);

      if (error) throw error;
      return NextResponse.json({ message: 'Player registration saved!' }, { status: 200 });
    }

    if (body.formType === 'partner_proposal') {
      const { error } = await supabase
        .from('partners')
        .insert([{
          organization_name: body.organization_name,
          contact_person: body.contact_person,
          email: body.email,
          partnership_interest: body.partnership_interest,
          message: body.message,
        }]);

      if (error) throw error;
      return NextResponse.json({ message: 'Partner proposal saved!' }, { status: 200 });
    }

    return NextResponse.json({ error: 'Unknown form type' }, { status: 400 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}