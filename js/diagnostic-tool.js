/**
 * Glenn's Automotive Repair & Maintenance
 * Interactive Vehicle Symptom Diagnostic Assistant
 * 4125 Arctic Spring Ave. Unit 11, Las Vegas, NV 89115
 */

const SYMPTOM_DATA = {
  brakes: {
    id: 'brakes',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3m0 12v3M3 12h3m12 0h3"/></svg>`,
    title: 'Squealing or Grinding Brakes',
    badge: 'Brake System',
    urgency: 'high',
    urgencyText: 'High Urgency: Safety Hazard',
    probableCauses: 'Worn ceramic/semi-metallic brake pads down to wear indicators, warped rotors, or seized caliper slide pins.',
    serviceName: 'Brake System Service & Rotor Inspection',
    serviceKey: 'brake-service',
    turnaround: 'Same-Day Service (2–4 Hours)',
    estimateRange: '$149 – $380 per axle',
    advice: 'Grinding metal-on-metal damages rotors rapidly and increases stopping distance. Avoid highway driving until inspected.'
  },
  ac_heat: {
    id: 'ac_heat',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><circle cx="12" cy="12" r="2"/></svg>`,
    title: 'A/C Blowing Warm Air in Vegas Heat',
    badge: 'A/C & Climate',
    urgency: 'med',
    urgencyText: 'Moderate Urgency: Comfort & Compressor Protection',
    probableCauses: 'Low R134a/R1234yf refrigerant from micro-leak, failing compressor clutch, clogged cabin filter, or faulty condenser cooling fan.',
    serviceName: 'Las Vegas Desert A/C Evac & Recharge',
    serviceKey: 'ac-repair',
    turnaround: 'Same-Day (1–3 Hours)',
    estimateRange: '$99 – $280 + refrigerant',
    advice: 'Running low refrigerant in Las Vegas 105°F+ weather can burn out your expensive A/C compressor. Fast diagnostic prevents total system failure.'
  },
  check_engine: {
    id: 'check_engine',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h.01M10 12h4m4 0h.01M2 10V8m20 2V8"/></svg>`,
    title: 'Check Engine Light On or Flashing',
    badge: 'Diagnostics',
    urgency: 'high',
    urgencyText: 'Urgent (Critical if Flashing)',
    probableCauses: 'Misfiring spark plugs, faulty oxygen (O2) sensor, failing catalytic converter, mass air flow (MAF) error, or loose gas cap.',
    serviceName: 'Computer Diagnostics & Scan (OBD-II OEM)',
    serviceKey: 'engine-diagnostics',
    turnaround: 'Same-Day Diagnostic (Under 1 Hour)',
    estimateRange: '$89 Comprehensive Scan (Waived with Repair)',
    advice: 'If the light is steadily lit, schedule diagnostic within 48 hours. If the light is FLASHING, pull over safely to prevent engine/catalytic melt.'
  },
  overheating: {
    id: 'overheating',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/><path d="M12 9v5"/></svg>`,
    title: 'Engine Temperature High / Coolant Leak',
    badge: 'Cooling System',
    urgency: 'high',
    urgencyText: 'Critical Urgency: Engine Damage Risk',
    probableCauses: 'Failed water pump, stuck closed thermostat, cracked radiator/hose, or blown head gasket.',
    serviceName: 'Cooling System Pressure Test & Repair',
    serviceKey: 'cooling-system',
    turnaround: 'Same-Day to 1 Day',
    estimateRange: '$120 – $450 depending on component',
    advice: 'Do NOT open the radiator cap when hot. Extreme risk of boiling fluid burns. Tow vehicle if temperature gauge enters the red zone.'
  },
  transmission: {
    id: 'transmission',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    title: 'Slipping Gears or Hard Shifts',
    badge: 'Drivetrain',
    urgency: 'high',
    urgencyText: 'High Urgency: Transmission Wear',
    probableCauses: 'Degraded transmission fluid, shift solenoid malfunction, torque converter clutch slip, or low pressure.',
    serviceName: 'Transmission Diagnostics & Fluid Flush',
    serviceKey: 'transmission',
    turnaround: '1–2 Days',
    estimateRange: '$180 Fluid Service to Full Diagnostic',
    advice: 'Catching transmission slippage early often prevents costly complete rebuilds or replacements.'
  },
  suspension: {
    id: 'suspension',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>`,
    title: 'Car Pulling to One Side / Steering Shake',
    badge: 'Steering & Alignment',
    urgency: 'med',
    urgencyText: 'Moderate Urgency: Uneven Tire Wear',
    probableCauses: 'Out-of-spec wheel alignment, unbalanced tires, worn tie rod ends, control arm bushings, or bent rim from potholes.',
    serviceName: 'Precision 4-Wheel Alignment & Suspension Check',
    serviceKey: 'suspension',
    turnaround: 'Same-Day (1–2 Hours)',
    estimateRange: '$99 – $160',
    advice: 'Misaligned wheels cause rapid uneven tire wear and reduce fuel economy by up to 10%.'
  },
  body_glass: {
    id: 'body_glass',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M13 3l6 3v15M9 9v.01M9 13v.01M9 17v.01M17 9v.01M17 13v.01M17 17v.01"/></svg>`,
    title: 'Accident Damage / Broken Windshield',
    badge: 'Auto Body & Glass',
    urgency: 'low',
    urgencyText: 'Standard Urgency: Insurance Welcome',
    probableCauses: 'Collision impact, highway debris rock chips, scratched paint, or bumper separation.',
    serviceName: 'Auto Body, Paint & Windshield Replacement',
    serviceKey: 'auto-body',
    turnaround: '1–4 Days (Free Estimates)',
    estimateRange: 'Direct Insurance Billing & Transparent Quotes',
    advice: 'We restore vehicles to pre-accident factory safety specs with computerized paint matching.'
  }
};

class DiagnosticTool {
  constructor() {
    this.container = document.getElementById('symptomChipsContainer');
    this.resultPanel = document.getElementById('diagnosticResultPanel');
    this.currentKey = 'brakes';
    this.init();
  }

  init() {
    if (!this.container || !this.resultPanel) return;
    this.renderChips();
    this.renderResult(this.currentKey);
  }

  renderChips() {
    this.container.innerHTML = Object.keys(SYMPTOM_DATA).map(key => {
      const item = SYMPTOM_DATA[key];
      const isActive = key === this.currentKey ? 'active' : '';
      return `
        <button type="button" class="symptom-chip ${isActive}" data-symptom="${key}">
          ${item.icon}
          <span>${item.title}</span>
        </button>
      `;
    }).join('');

    this.container.querySelectorAll('.symptom-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const symptom = btn.getAttribute('data-symptom');
        this.selectSymptom(symptom);
      });
    });
  }

  selectSymptom(key) {
    if (!SYMPTOM_DATA[key]) return;
    this.currentKey = key;
    this.container.querySelectorAll('.symptom-chip').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-symptom') === key);
    });
    this.renderResult(key);
  }

  renderResult(key) {
    const data = SYMPTOM_DATA[key];
    const urgencyClass = data.urgency === 'high' ? 'urgency-high' : data.urgency === 'med' ? 'urgency-med' : 'urgency-low';

    this.resultPanel.innerHTML = `
      <div class="diag-left">
        <div class="badge-pill badge-amber" style="margin-bottom: 0.75rem;">${data.badge} Analysis</div>
        <h4>${data.title}</h4>
        <p><strong>Probable Diagnosis:</strong> ${data.probableCauses}</p>
        <p style="margin-top: 0.5rem;"><strong>Tech Tip:</strong> ${data.advice}</p>
        <div class="diag-urgency-badge ${urgencyClass}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          ${data.urgencyText}
        </div>
      </div>
      <div class="diag-right">
        <div>
          <span style="font-size: 0.8rem; color: var(--text-light-muted); text-transform: uppercase; font-weight: 700;">Recommended Service:</span>
          <h5 style="color: #ffffff; font-size: 1.05rem; font-weight: 800; margin-top: 0.2rem;">${data.serviceName}</h5>
        </div>
        <div>
          <span style="font-size: 0.8rem; color: var(--text-light-muted); text-transform: uppercase; font-weight: 700;">Estimated Turnaround:</span>
          <div style="color: #34d399; font-weight: 700; font-size: 0.95rem;">${data.turnaround}</div>
        </div>
        <button type="button" class="btn btn-primary btn-sm btn-full" onclick="window.GlennsApp.openBookingModal('${data.serviceName}', '${data.title}')">
          Book This Repair Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.GlennsDiagnostic = new DiagnosticTool();
});
